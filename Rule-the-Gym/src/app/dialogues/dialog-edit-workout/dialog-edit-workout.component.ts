import { Component, OnInit, Inject } from '@angular/core';
import { DialogWorkoutAddExerciseComponent } from 'src/app/dialogues/dialog-workout/dialog-workout-add-exercise/dialog-workout-add-exercise.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogAskDeleteComponent } from '../dialog-ask-delete/dialog-ask-delete/dialog-ask-delete.component';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Exercise, Set, WorkoutExercise } from 'src/app/models/models';

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
  workoutexercises!: WorkoutExercise[];

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
        this.workoutexercises.sort((x, y) => {
          if (x.workout_exercise_id < y.workout_exercise_id) {
            return -1;
          } else if (x.workout_exercise_id === y.workout_exercise_id) {
            return 0;
          }
          return 1;
        });
        this.exercises = [];
        for (let workoutexercise of this.workoutexercises) {
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
        this.sets = [];
        for (let set of data) {
          this.sets.push(set);
        }
        this.sets.sort((x, y) => {
          if (x.set_id < y.set_id) {
            return -1;
          } else if (x.set_id === y.set_id) {
            return 0;
          }
          return 1;
        });
      });
  }

  safeExerciseData(id: number) {
    this.dataService.editSet(
      this.sets[id].set_id,
      this.sets[id].reps,
      this.sets[id].weight,
      this.sets[id].pause
    ).subscribe(()=>{this.loadExerciseData(id);});
    
  }

  openDeleteExercise(index: number) {
    const dialogRef = this.dialog.open(DialogAskDeleteComponent, {
      width: '60%',
      height: '200px',
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
      data: { workout_id: this.data.workout.workout_id },
    });
    dialogRef.afterClosed().subscribe((e) => {
      this.ngOnInit();
    });
  }

  addSet(index: number) {
    this.dataService.createSet(
      this.workoutexercises[index].workout_exercise_id
    );
    this.loadExerciseData(index);
  }

  deleteSet(set_index: number, workout_exercise_index: number) {
    this.dataService
      .DeleteSet(this.sets[set_index].set_id)
      .subscribe(() => this.loadExerciseData(workout_exercise_index));
  }
}
