import { Injectable } from '@angular/core';
import { ExerciseDataModel } from '../models/exercise-data-model.model';
import { ExerciseModel } from '../models/exercise-model.model';
import { WorkoutData } from '../models/workout-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
WorkoutList:WorkoutData[];
ExerciseList:ExerciseModel[];
  constructor() { 
    this.ExerciseList=[
      new ExerciseModel("Curls","biceps curls","Chest","Dumbell"),
      new ExerciseModel("Curls","biceps curls","biceps","Dumbell")
    ];
    this.WorkoutList=[
      new WorkoutData(
        'Push',
        'Workout1',
        'Gym',
        new Map([
                  [new ExerciseModel('Bench Press', 'Push dumbells up', 'Chest', 'Dumbells'),
                  new ExerciseDataModel("3","8 -12","30","20")]
                ])
        ),
      

      new WorkoutData(
        'Pull',
        'Workout1',
        'Gym',
        new Map([[new ExerciseModel('handstand', 'biceps curls', 'biceps', 'Dumbell'),
        new ExerciseDataModel("3","8 -12","30","20")]]),
        ),
        
      new WorkoutData(
        'Legs',
        'Workout1',
        'Calysthenics',
        new Map([[new ExerciseModel('handstand', 'biceps curls', 'biceps', 'Dumbell'),
        new ExerciseDataModel("3","8 -12","30","20")]]),
        )
    ];
  }

  getAllExercises(): ExerciseModel[]{
    return this.ExerciseList;
  }

  getAllWorkouts(): WorkoutData[]{
    return this.WorkoutList;

  }
}
