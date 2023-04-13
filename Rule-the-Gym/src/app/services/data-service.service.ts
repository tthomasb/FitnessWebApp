import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Exercise } from '../models/models';

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

  getExerciseById(id: string): Observable<Exercise> {
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

  getAllWorkouts(): any[] {
    let res: any[] = [];
    return res;
  }

  getAllExercises123(): any[] {
    let res: any[] = [];
    return res;
  }
}
