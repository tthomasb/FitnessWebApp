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
    private dataService: DataServiceService
  ) {}

  ngOnInit(): void {
    this.dataService
      .getWorkoutExerciseByWorkoutId(this.data.workout)
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
        this.sets = [];
        for (let set of data) {
          this.sets.push(set);
        }
      });
    console.log(this.sets);
  }
  safeExerciseData(id: number) {
    //todo fix this
    // this.dummyMap.get(exMapKey)!.sets = this.sets!;
    // this.dummyMap.get(exMapKey)!.reps = this.reps!;
    // this.dummyMap.get(exMapKey)!.breaktime = this.breaktime!;
    // this.dummyMap.get(exMapKey)!.weight = this.weight!;
    // console.log(this.sets, this.reps, this.breaktime, this.weight);
    // console.log('Safed ExerciseData: ', this.data.workout, 'index:');
    this.dataService.editSet(
      this.workoutexercises[id].workout_exercise_id,
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
  deleteExercise(index: any) {
    //todo fix this
    console.log(index);
    console.log(this.workoutexercises);
    this.dataService.deleteWorkoutExercise(
      this.workoutexercises[index].workout_exercise_id
    );
    this.ngOnInit();
    // this.data.workout.exerciseMap.delete(index);
  }
  safeWorkoutData() {
    //todo fix this
    // console.log(this.workout);
    // console.log(this.name);
    // if (this.data.dialogName === 'Edit') {
    //   this.data.workout.name = this.name;
    //   this.data.workout.exerciseMap = this.dummyMap;
    //   this.data.workout.description = this.description;
    //   this.data.workout.type = this.type;
    //   console.log(this.data.workouts);
    // }
    // //Safe Data Create
    // if (this.data.dialogName === 'Create') {
    //   this.dialogRef.close(
    //     new WorkoutData(
    //       this.name!,
    //       this.description!,
    //       this.type!,
    //       new Map<ExerciseModel, ExerciseDataModel>()
    //     )
    //   );
    // }
  }

  addExercise() {
    const dialogRef = this.dialog.open(DialogWorkoutAddExerciseComponent, {
      width: '90%',
      height: '90%',
      data: {"workout_id":this.data.workout.workout_id},
    });
    console.log(this.data);
  }

  close() {}
}
