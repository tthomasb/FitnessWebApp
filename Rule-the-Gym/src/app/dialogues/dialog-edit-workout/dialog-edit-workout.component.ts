import { Component, OnInit, Inject } from '@angular/core';
import { DialogWorkoutAddExerciseComponent } from 'src/app/dialogues/dialog-workout/dialog-workout-add-exercise/dialog-workout-add-exercise.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { WorkoutData } from 'src/app/models/workout-data.model';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { convertTypeAcquisitionFromJson } from 'typescript';
import { ExerciseDataModel } from 'src/app/models/exercise-data-model.model';

@Component({
  selector: 'app-dialog-edit-workout',
  templateUrl: './dialog-edit-workout.component.html',
  styleUrls: ['./dialog-edit-workout.component.scss'],
})
export class DialogEditWorkoutComponent implements OnInit {
  name!: string|undefined;
  sets!: string|undefined;
  reps!: string|undefined;
  breaktime!: string|undefined;
  description!: string|undefined;
  type!: string|undefined;
  exercises!: ExerciseModel;
  weight!: string|undefined;  
  dummyMap!:Map<ExerciseModel,ExerciseDataModel>;
  index!:number;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEditWorkoutComponent>,
    public dialog: MatDialog
  ) {};

  ngOnInit(): void {
    this.name=this.data.workout.name;
    this.type=this.data.workout.type;
    this.description=this.data.workout.description;
    this.dummyMap=this.data.workout.exerciseMap;


  }
  loadExerciseData(exercise:ExerciseModel){
    console.log(this.dummyMap.get(exercise!));
    let exData=this.dummyMap.get(exercise);
    this.sets=exData?.sets;
    this.reps=exData?.reps;
    this.breaktime=exData?.breaktime;
    this.weight=exData?.weight;
    console.log(this.sets,this.reps,this.breaktime,this.weight);
    console.log(exData);
    console.log(this.dummyMap.get(exercise));
  }

  safeExerciseData(exMapKey:ExerciseModel){
    this.dummyMap.get(exMapKey)!.sets= this.sets!;
    this.dummyMap.get(exMapKey)!.reps= this.reps!;
    this.dummyMap.get(exMapKey)!.breaktime = this.breaktime!;
    this.dummyMap.get(exMapKey)!.weight = this.weight!;
      console.log(this.sets,this.reps,this.breaktime,this.weight);
      console.log("Safed ExerciseData: ", this.data.workout, "index:");
  }
  safeWorkoutData() {
    console.log(this.data.workouts[this.data.index]);
    console.log(this.name);
    if (this.data.dialogName === 'Edit') {
      this.data.workout.name = this.name;
      this.data.workout.exerciseMap=this.dummyMap;
      this.data.workout.description = this.description;
      this.data.workout.type = this.type;
    
      
      console.log(this.data.workouts);
    }

    //Safe Data Create
    if (this.data.dialogName === 'Create') {      
        this.dialogRef.close(
          new WorkoutData(
          this.name!,
          this.description!,
          this.type!, 
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
  console.log(this.data);
  }

  close() {
    
  }
}
