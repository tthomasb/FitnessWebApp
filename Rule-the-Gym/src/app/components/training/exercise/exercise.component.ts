import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { ListFormat } from 'typescript';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
 exercises:ExerciseModel[]
 mgChest:ExerciseModel[]=[];
 mgBack: ExerciseModel[]=[];
 mgLegs: ExerciseModel[]=[];
 

  constructor() { 
    this.exercises=[new ExerciseModel("Curls","biceps curls",5,4,60,"Chest","Dumbell"),new ExerciseModel("Curls","biceps curls",5,4,60,"biceps","Dumbell")];
   
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

  ngOnInit(): void {
    

    }
  }


