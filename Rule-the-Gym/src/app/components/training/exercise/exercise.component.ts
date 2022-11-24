import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { ListFormat } from 'typescript';

import { MatDialog } from '@angular/material/dialog';
import { DialogExerciseComponent } from 'src/app/dialogues/dialog-exercise/dialog-exercise.component';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
 exercises:ExerciseModel[];
 dialog: Dialog;
 

  constructor(dialog:Dialog) { 
    this.dialog=dialog
    this.exercises=[
      new ExerciseModel("Curls","biceps curls","Chest","Dumbell"),
      new ExerciseModel("Curls","biceps curls","biceps","Dumbell")
    ];
   
    
  }

  ngOnInit(): void {}

  /**
   * Open the workout dialog
   */
   getAccordionData(): any {
    const data:any = {
      "toLoop": this.exercises,
      "topLayer": 'muscle',
      "hasStart": false            
    };
    return data;
  }

    openEditExercise(){
      const dialogRef = this.dialog.open(DialogExerciseComponent, {
        width: '90%',
        height: '90%',
      });
    }
    openDeleteExercise(){
      const dialogRef = this.dialog.open(DialogExerciseComponent, {
        width: '90%',
        height: '90%',
      });
    }
   openAddExercise() {
    const dialogRef = this.dialog.open(DialogExerciseComponent, {
      width: '90%',
      height: '90%',
    });
    /**
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    */
  }

  catchDialogEvent(value:string){
    switch(value){
      case"start":
      console.log("start Workout was called in exercise!")      
      break;
      case"edit":
      this.openEditExercise();      
      break;
      case"delete":
      this.openDeleteExercise();
      break;
    }
  }
}
