import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExerciseComponent } from 'src/app/components/training/exercise/exercise.component';
import { Dialog } from 'src/app/enums/dialog';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { WorkoutData } from 'src/app/models/workout-data.model';

@Component({
  selector: 'app-dialog-workout-add-exercise',
  templateUrl: './dialog-workout-add-exercise.component.html',
  styleUrls: ['./dialog-workout-add-exercise.component.scss']
})
export class DialogWorkoutAddExerciseComponent implements OnInit {
  @Input() search:string="";
Allexercises:ExerciseModel[];
workout?:WorkoutData;
  constructor(public dialog:MatDialog) {
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
      this.workout?.exercises.push(this.Allexercises[value]);
  }
}
