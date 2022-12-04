import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExerciseComponent } from 'src/app/components/training/exercise/exercise.component';
import { Dialog } from 'src/app/enums/dialog';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { WorkoutData } from 'src/app/models/workout-data.model';
import { DialogEditWorkoutComponent } from '../../dialog-edit-workout/dialog-edit-workout.component';

@Component({
  selector: 'app-dialog-workout-add-exercise',
  templateUrl: './dialog-workout-add-exercise.component.html',
  styleUrls: ['./dialog-workout-add-exercise.component.scss']
})
export class DialogWorkoutAddExerciseComponent implements OnInit {
  @Input() search:string="";
Allexercises:ExerciseModel[];

  constructor(@Inject(MAT_DIALOG_DATA)public data: any,
  public MatDialogRef: MatDialogRef<DialogEditWorkoutComponent>,public dialog:MatDialog) {

    this.Allexercises=[
      new ExerciseModel("Curls","biceps curls","Chest","Dumbell"),
      new ExerciseModel("Curls","biceps curls","biceps","Dumbell")      
    ];
    
   }

  ngOnInit(): void {
  }
  getAccordionData(): any {
    const data:any = {
      "toLoop": this.Allexercises,
      "topLayer": 'muscle',
      "type": Dialog.ADD            
    };
    return data;
  }
  catchDialogEvent(value:any){
    switch(value.event){
      case Dialog.START:
           
      break;
      case Dialog.EDIT:
      
      break;
      case Dialog.DELETE:
      
      break;
      case Dialog.ADD:
        this.AddExercise(value.index);
    }
  }
  AddExercise(value:number){
      if(this.data.dialogName===Dialog.EDIT){
        console.log(this.data.index);
      this.data.data[this.data.index].exercises.push(this.Allexercises[value]);
      }
      if(this.data.dialogName===Dialog.CREATE){
        this.data.data 
        //Todo add new workout

      }
  }
}
