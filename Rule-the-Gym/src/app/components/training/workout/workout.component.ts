import { Component, OnInit } from '@angular/core';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { WorkoutData } from 'src/app/models/workout-data.model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  constructor() { }
  workouts:WorkoutData[]=[
  new WorkoutData("Biceps1",[new ExerciseModel("Curls","biceps curls",5,4,60),new ExerciseModel("Hammer Curls","Hammer curls",5,4,60)]), 
  new WorkoutData("Biceps2",[new ExerciseModel("Curls","biceps curls",5,4,60),new ExerciseModel("Hammer Curls","Hammer curls",5,4,60)])
];
  

  ngOnInit(): void {
      
  }

}

/**
   * Open the dialog for adding an Event
   * openAdd(): void {
  
  }
   */
 