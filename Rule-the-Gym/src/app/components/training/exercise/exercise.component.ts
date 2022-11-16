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
 exercises:ExerciseModel[]
 mgChest:ExerciseModel[]=[];
 mgBack: ExerciseModel[]=[];
 mgLegs: ExerciseModel[]=[];
 dialog: Dialog;
 

  constructor(dialog:Dialog) { 
    this.dialog=dialog
    this.exercises=[new ExerciseModel("Curls","biceps curls","Chest","Dumbell"),new ExerciseModel("Curls","biceps curls","biceps","Dumbell")];
   
    for(let i=0; i<this.exercises.length; i++){
      if(this.exercises[i].muscle==="Chest"){
        this.mgChest[this.mgChest.length]=this.exercises[i];
      }
      if(this.exercises[i].muscle==="Back"){
        this.mgBack[this.mgBack.length]=this.exercises[i];
      }
      if(this.exercises[i].muscle==="Legs"){
        this.mgLegs[this.mgLegs.length]=this.exercises[i];
      }
    }
    
  }

  ngOnInit(): void {}

  /**
   * Open the workout dialog
   */
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
}
