import { Component, OnInit, Inject } from '@angular/core';
import { DialogWorkoutAddExerciseComponent } from 'src/app/dialogues/dialog-workout/dialog-workout-add-exercise/dialog-workout-add-exercise.component';
import {
  MatLegacyDialog as MatDialog,
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
} from '@angular/material/legacy-dialog';
import { DialogAskDeleteComponent } from '../dialog-ask-delete/dialog-ask-delete/dialog-ask-delete.component';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Exercise, Set } from 'src/app/models/models';

@Component({
  selector: 'app-dialog-edit-workout',
  templateUrl: './dialog-edit-workout.component.html',
  styleUrls: ['./dialog-edit-workout.component.scss'],
})
export class DialogEditWorkoutComponent implements OnInit {
  sets: Set[] = [
    { set_id: 0, workout_exercise_id: 0, reps: 0, weight: 0, pause: 0 },
  ];
  exercises: Exercise[] = [];
  index!: number;
  workout: any;
  workoutexercises!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEditWorkoutComponent>,
    public dialog: MatDialog,
    public dataService: DataServiceService
  ) {}

  ngOnInit(): void {
    this.dataService
      .getWorkoutExerciseByWorkoutId(this.data.workout.workout_id)
      .subscribe((data) => {
        this.workoutexercises = data;
        this.exercises = [];
        for (let workoutexercise of data) {
          this.dataService
            .getExerciseById(workoutexercise.exercise_id)
            .subscribe((data) => {
              this.exercises.push(data);
            });
        }
      });
  }

  loadExerciseData(index: number) {
    this.dataService
      .getSetsByWorkoutExerciseId(
        this.workoutexercises[index].workout_exercise_id
      )
      .subscribe((data) => {
        console.log(data)
        this.sets = [];
        for (let set of data) {
          this.sets.push(set);
        }
      });
  }

  safeExerciseData(id: number) {
    this.dataService.editSet(
      this.sets[0].set_id,
      this.sets[0].reps,
      this.sets[0].weight,
      this.sets[0].pause
    );
    this.loadExerciseData(id);
  }

  openDeleteExercise(index: number) {
    const dialogRef = this.dialog.open(DialogAskDeleteComponent, {
      width: '20%',
      height: '25%',
      data: { exercises: this.exercises, index: index },
    });
    const sub = dialogRef.componentInstance.Emitter.subscribe((e) => {
      if (e) this.deleteExercise(index);
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
      dialogRef.componentInstance.Emitter.unsubscribe();
    });
  }
  // Delete the selected exercise
  deleteExercise(index: any) {
    //todo fix this
    console.log(index);
    console.log(this.workoutexercises);
    this.dataService.deleteWorkoutExercise(
      this.workoutexercises[index].workout_exercise_id
    );
    this.ngOnInit();
  }
  safeWorkoutData() {        
    this.dataService.safeWorkout(this.data.workout);
  }

  // Open the Dialog to add an exercise
  addExercise() {
    const dialogRef = this.dialog.open(DialogWorkoutAddExerciseComponent, {
      width: '90%',
      height: '90%',
      data: {"workout_id":this.data.workout.workout_id},
    });
    dialogRef.afterClosed().subscribe((e)=>{
      this.ngOnInit();
    })
  }

  close() {}
}
