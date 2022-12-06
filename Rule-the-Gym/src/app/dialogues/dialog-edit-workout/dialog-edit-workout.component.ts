import { Component, OnInit, Inject } from '@angular/core';
import { DialogWorkoutAddExerciseComponent } from 'src/app/dialogues/dialog-workout/dialog-workout-add-exercise/dialog-workout-add-exercise.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { WorkoutData } from 'src/app/models/workout-data.model';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { convertTypeAcquisitionFromJson } from 'typescript';
import { ExerciseDataModel } from 'src/app/models/exercise-data-model.model';
import { DialogAskDeleteComponent } from '../dialog-ask-delete/dialog-ask-delete/dialog-ask-delete.component';

@Component({
  selector: 'app-dialog-edit-workout',
  templateUrl: './dialog-edit-workout.component.html',
  styleUrls: ['./dialog-edit-workout.component.scss'],
})
export class DialogEditWorkoutComponent implements OnInit {
  name!: string;
  sets!: string[];
  reps!: string[];
  breaktime!: string[];
  description!: string;
  type!: string;
  exercises!: ExerciseModel[];
  weight2!: any[];  
weight3:string[]=[];
  workout: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEditWorkoutComponent>,
    public dialog: MatDialog
  ) {};

  ngOnInit(): void {
    this.workout = this.data.workouts[this.data.index];
    console.log(this.workout);
    this.name = this.workout.name;
    this.sets = this.workout.sets;
    this.reps = this.workout.reps;
    this.breaktime = this.workout.breaktime;
    this.description = this.workout.description;
    this.type = this.workout.type;
    this.exercises = this.workout.exercises;
    this.weight2=this.workout.weight;
  }
  safeExerciseData(index:number){
    this.workout.sets[index] = this.sets[index];
      this.workout.reps[index] = this.reps[index];
      this.workout.breaktime[index] = this.breaktime[index];
      this.workout.weight[index] = this.weight2[index].weight;
      console.log("Safed ExerciseData: ", this.workout, "index:",index);
  }
  openDeleteExercise(index:number) {
    const dialogRef = this.dialog.open(DialogAskDeleteComponent, {
      width: '20%',
      height: '16%',
      data:{exercises:this.exercises, index:index}
    });
    const sub = dialogRef.componentInstance.Emitter.subscribe((e) => {
      if(e)this.deleteExercise(index);
    });
    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.Emitter.unsubscribe();
    })
  }
  deleteExercise(index: any) {
    this.data.workouts[this.data.index].exerciseMap.delete(index);
  }
  safeWorkoutData() {
    console.log(this.workout);
    console.log(this.name);
    if (this.data.dialogName === 'Edit') {
      this.workout.name = this.name;
      this.workout.sets = this.sets;
      this.workout.reps = this.reps;
      this.workout.breaktime = this.breaktime;
      this.workout.description = this.description;
      this.workout.type = this.type;
      this.workout.exercises = this.exercises;
      this.workout.weight = this.weight2;
      
      console.log(this.data.workouts);
    }

    //Safe data Create
    if (this.data.dialogName === 'Create') {
      this.data.workouts.push(
        new WorkoutData(
          this.name,
          this.description,
          this.type, 
          new Map<ExerciseModel, ExerciseDataModel>()

        )
      );
    }
  }

  addExercise() {
    const dialogRef = this.dialog.open(DialogWorkoutAddExerciseComponent, {
      width: '90%',
      height: '90%',
      data:this.data
  });
  }
}
