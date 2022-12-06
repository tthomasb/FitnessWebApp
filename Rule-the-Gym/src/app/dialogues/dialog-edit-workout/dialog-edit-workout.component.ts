import { Component, OnInit, Inject } from '@angular/core';
import { DialogWorkoutAddExerciseComponent } from 'src/app/dialogues/dialog-workout/dialog-workout-add-exercise/dialog-workout-add-exercise.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { WorkoutData } from 'src/app/models/workout-data.model';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { convertTypeAcquisitionFromJson } from 'typescript';

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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEditWorkoutComponent>,
    public dialog: MatDialog
  ) {};

  ngOnInit(): void {
    console.log(this.data.workouts[this.data.index]);
    this.name = this.data.workouts[this.data.index].name;
    this.sets = this.data.workouts[this.data.index].sets;
    this.reps = this.data.workouts[this.data.index].reps;
    this.breaktime = this.data.workouts[this.data.index].breaktime;
    this.description = this.data.workouts[this.data.index].description;
    this.type = this.data.workouts[this.data.index].type;
    this.exercises = this.data.workouts[this.data.index].exercises;
    this.weight2=this.data.workouts[this.data.index].weight;
  }
  safeExerciseData(index:number){
    this.data.workouts[this.data.index].sets[index] = this.sets[index];
      this.data.workouts[this.data.index].reps[index] = this.reps[index];
      this.data.workouts[this.data.index].breaktime[index] = this.breaktime[index];
      this.data.workouts[this.data.index].weight[index] = this.weight2[index].weight;
      console.log("Safed ExerciseData: ", this.data.workouts[this.data.index], "index:",index);
  }
  safeWorkoutData() {
    console.log(this.data.workouts[this.data.index]);
    console.log(this.name);
    if (this.data.dialogName === 'Edit') {
      this.data.workouts[this.data.index].name = this.name;
      this.data.workouts[this.data.index].sets = this.sets;
      this.data.workouts[this.data.index].reps = this.reps;
      this.data.workouts[this.data.index].breaktime = this.breaktime;
      this.data.workouts[this.data.index].description = this.description;
      this.data.workouts[this.data.index].type = this.type;
      this.data.workouts[this.data.index].exercises = this.exercises;
      this.data.workouts[this.data.index].weight = this.weight2;
      
      console.log(this.data.workouts);
    }

    //Safe data Create
    if (this.data.dialogName === 'Create') {
      this.data.workouts.push(
        new WorkoutData(
          this.name,
          this.description,
          this.exercises,
          this.sets,
          this.reps,
          this.breaktime,
          this.type,
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
