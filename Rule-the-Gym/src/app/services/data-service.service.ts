import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Exercise, Set, Workout, WorkoutExercise } from '../models/models';

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
    return this.http.get<Workout[]>('/api/workout/type/gym', httpOptions);
  }
  EditWorkout(): any[] {
    let res: any[] = [];
    return res;
  }

  DeleteWorkout(id: string) {
    this.http.delete(`api/workout/delete/${id}`, httpOptions).subscribe((e) => {
      console.log(e);
    });
  }

  CreateWorkout(): any[] {
    let res: any[] = [];
    return res;
  }

  getWorkoutExerciseByWorkoutId(id: number): Observable<WorkoutExercise[]> {
    return this.http.get<WorkoutExercise[]>(
      'api/workout/exercise/1',
      httpOptions
    );
  }

  editWorkoutExercise(): any[] {
    let res: any[] = [];
    return res;
  }

  deleteWorkoutExercise(id: string) {
    this.http
      .delete(`api/workout/exercise/delete/${id}`, httpOptions)
      .subscribe((e) => {
        console.log(e);
      });
  }

  createWorkoutExercise(workout_id:number, exercise_id:string):Observable<object> {
    return this.http.post<object>(`api/workout/exercise/add`,{"workout_id":workout_id, "exercise_id":exercise_id})
  }

  getSetsByWorkoutExerciseId(id: string): Observable<Set[]> {
    return this.http.get<Set[]>(`api/workout/exercise/set/${id}`, httpOptions);
  }

  editSet(id: number, reps: number, weight: number, pause: number) {
    this.http
      .put<Set|object>(
        `api/workout/exercise/set/${id}`,
        { reps: reps, weight: weight, pause: pause },
        httpOptions
      )
      .subscribe((data) => {
        
        console.log(data);
      });
  }

  DeleteSet(): any[] {
    let res: any[] = [];
    return res;
  }
  createSet(): any[] {
    let res: any[] = [];
    return res;
  }

  getSetHistoryBySetId(): any[] {
    let res: any[] = [];
    return res;
  }

  createSetHistory(): any[] {
    let res: any[] = [];
    return res;
  }
}
