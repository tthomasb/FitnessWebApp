import { Injectable } from '@angular/core';
import { ExerciseDataModel } from '../models/exercise-data-model.model';
import { ExerciseModel } from '../models/exercise-model.model';
import { WorkoutData } from '../models/workout-data.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
WorkoutList?:WorkoutData[];
ExerciseList!:ExerciseModel[];
domain:string='http://localhost:8000'
  constructor(private http: HttpClient) { 
    // this.ExerciseList=    
    //  [
    //    new ExerciseModel("Curls","biceps curls","Chest","Dumbell"),
    //    new ExerciseModel("Curls","biceps curls","biceps","Dumbell")
    //  ];
    // this.WorkoutList=[
    //   new WorkoutData(
    //     'Push',
    //     'Workout1',
    //     'Gym',
    //     new Map([
    //               [new ExerciseModel('Bench Press', 'Push dumbells up', 'Chest', 'Dumbells'),
    //               new ExerciseDataModel("3","8 -12","30","20")]
    //             ])
    //     ),
  //
    //   new WorkoutData(
    //     'Pull',
    //     'Workout1',
    //     'Gym',
    //     new Map([[new ExerciseModel('handstand', 'biceps curls', 'biceps', 'Dumbell'),
    //     new ExerciseDataModel("3","8 -12","30","20")]]),
    //     ),
  //  
    //   new WorkoutData(
    //     'Legs',
    //     'Workout1',
    //     'Calysthenics',
    //     new Map([[new ExerciseModel('handstand', 'biceps curls', 'biceps', 'Dumbell'),
    //     new ExerciseDataModel("3","8 -12","30","20")]]),
    //     )
    // ];
  }

  getAllExercises():ExerciseModel[]{
    //return this.ExerciseList;
    this.http.get<any[]>(this.domain + 'api/exercise').subscribe((data)=>{
    this.ExerciseList.concat(data);
    console.log(data);}
    );    
    
    return this.ExerciseList;
  }

  getAllWorkouts(): any[]{
    let res: any[]= [];
    return res;
  //  this.http.get(this.domain +'api/workoutGetAll').subscribe((data)=>{

  //  });


  }
}
