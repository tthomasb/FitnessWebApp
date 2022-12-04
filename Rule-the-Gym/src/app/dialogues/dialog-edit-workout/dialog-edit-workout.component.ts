import { Component, OnInit, Inject } from '@angular/core';
import { DialogWorkoutAddExerciseComponent } from 'src/app/dialogues/dialog-workout/dialog-workout-add-exercise/dialog-workout-add-exercise.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { WorkoutData } from 'src/app/models/workout-data.model';
import { ExerciseModel } from 'src/app/models/exercise-model.model';

@Component({
  selector: 'app-dialog-edit-workout',
  templateUrl: './dialog-edit-workout.component.html',
  styleUrls: ['./dialog-edit-workout.component.scss'],
})
export class DialogEditWorkoutComponent implements OnInit {
  name!: string;
  sets!: string;
  reps!: string;
  breaktime!: string;
  description!: string;
  type!: string;
  exercises!: ExerciseModel[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEditWorkoutComponent>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log(this.data.data[this.data.index]);
    this.name = this.data.data[this.data.index].name;
    this.sets = this.data.data[this.data.index].sets;
    this.reps = this.data.data[this.data.index].reps;
    this.breaktime = this.data.data[this.data.index].breaktime;
    this.description = this.data.data[this.data.index].description;
    this.type = this.data.data[this.data.index].type;
    this.exercises = this.data.data[this.data.index].exercises;
  }

  safeData() {
    console.log(this.data.data);
    console.log(this.name);
    if (this.data.dialogName === 'Edit') {
      this.data.data[this.data.index].name = this.name;
      this.data.data[this.data.index].sets = this.sets;
      this.data.data[this.data.index].reps = this.reps;
      this.data.data[this.data.index].breaktime = this.breaktime;
      this.data.data[this.data.index].description = this.description;
      this.data.data[this.data.index].type = this.type;
      this.data.data[this.data.index].exercises = this.exercises;
      
      console.log(this.data.data);
    }

    //Safe data Create
    if (this.data.dialogName === 'Create') {
      this.data.data.push(
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
      data:{
        workout:this.data
      }
    });
  }
}
