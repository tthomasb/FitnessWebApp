import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { muscleGroup } from 'src/app/models/muscleGroup.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
 exercises:ExerciseModel[]
 groups:muscleGroup[];

  Musclegroup = this._formBuilder.group({
    chest: false,
    back: false,
    arms: false,
    biceps:false,
  });

  constructor(private _formBuilder: FormBuilder) { 
    this.exercises=[new ExerciseModel("Curls","biceps curls",5,4,60,"biceps"),new ExerciseModel("Curls","biceps curls",5,4,60,"biceps")];
    this.groups=[new muscleGroup("biceps",this.exercises)];
    
  }

  ngOnInit(): void {
    

    }
  }


