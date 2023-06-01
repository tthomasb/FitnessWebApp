import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Exercise,
  Set,
  Set_History,
  Workout,
  WorkoutExercise,
} from '../models/models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  getAllExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>('/api/exercise');
  }

  getExerciseById(id: number): Observable<Exercise> {
    return this.http.get<Exercise>(`/api/exercise/${id}`);
  }

  deleteExercise(id: string): Observable<any> {
    return this.http.delete(`/api/exercise/${id}`);
  }

  createExercise(
    exercisename: string,
    description: string,
    muscle: string,
    equipment: string
  ): Observable<Exercise> {
    return this.http.post<Exercise>(
      '/api/exercise',
      { exercisename, description, muscle, equipment },
      httpOptions
    );
  }

  editExercise(
    exercise_id: string,
    exercisename: string,
    description: string,
    muscle: string,
    equipment: string
  ): Observable<Exercise> {
    return this.http.put<Exercise>(
      `/api/exercise/${exercise_id}`,
      { exercisename, description, muscle, equipment },
      httpOptions
    );
  }

  getAllWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>('/api/workout/type', httpOptions);
  }

  safeWorkout(workout: Workout) {
    return this.http
      .put(
        `api/workout/${workout.workout_id}`,
        {
          workoutname: workout.workoutname,
          type: workout.type,
          description: workout.description,
        },
        httpOptions
      )
      .subscribe((e) => {});
  }

  EditWorkout(): any[] {
    let res: any[] = [];
    return res;
  }

  DeleteWorkout(id: string) {
    this.http
      .delete(`api/workout/delete/${id}`, httpOptions)
      .subscribe((e) => {});
  }

  CreateWorkout(name: string, type: string, id: number): Observable<any> {
    return this.http.post<any>(`api/workout/add`, {
      workoutname: name,
      type: type,
      user_id: id,
    });
  }

  getWorkoutExerciseByWorkoutId(id: number): Observable<WorkoutExercise[]> {
    return this.http.get<WorkoutExercise[]>(
      `api/workout/exercise/${id}`,
      httpOptions
    );
  }

  editWorkoutExercise(): any[] {
    let res: any[] = [];
    return res;
  }

  deleteWorkoutExercise(id: number) {
    this.http
      .delete(`api/workout/exercise/delete/${id}`, httpOptions)
      .subscribe((e) => {
        console.log(e);
      });
  }

  createWorkoutExercise(
    workout_id: number,
    exercise_id: string
  ): Observable<WorkoutExercise> {
    return this.http.post<WorkoutExercise>(
      `api/workout/exercise/add`,
      { workout_id: workout_id, exercise_id: exercise_id },
      httpOptions
    );
  }

  getSetsByWorkoutExerciseId(id: number): Observable<Set[]> {
    return this.http.get<Set[]>(`api/workout/exercise/set/${id}`, httpOptions);
  }

  editSet(id: number, reps: number, weight: number, pause: number) {
  let obs=  this.http.put<Set | object>(
      `api/workout/exercise/set/${id}`,
      { reps: reps, weight: weight, pause: pause },
      httpOptions
    )
    obs.subscribe((data)=>{});
    return obs;
  }

  DeleteSet(set_id: number): Observable<any> {
    let obs=this.http
      .delete(`api/workout/exercise/set/${set_id}`, httpOptions)
        obs.subscribe((data)=>{});  
    return obs
  }
  createSet(workoutexercise_id: number) {
    this.http
      .post(
        `api/workout/exercise/${workoutexercise_id}/set`,
        { reps: 0, pause: 0, weight: 0 },
        httpOptions
      )
      .subscribe();
  }

  getSetHistoryBySetId(id: number): Observable<Set_History> {
    return this.http.get<Set_History>(
      `api/workout/exercise/set_history/${id}`,
      httpOptions
    );
  }

  safeSetHistoryData(set_history: Set_History) {
    // console.log(set_history);
    return this.http
      .put(
        `api/workout/exercise/set_history/${set_history.set_history_id}`,
        {
          reps: set_history.reps,
          weight: set_history.weight,
          record_time: set_history.record_time,
        },
        httpOptions
      )
      .subscribe((e) => console.log(e));
  }

  // workoutGetTime(workout_id: any) {
  //   // return this.http.get<ExerciseTime>(`api/workout/exercise/time`, httpOptions);
  // }

  createSetHistory(): any[] {
    let res: any[] = [];
    return res;
  }
}
