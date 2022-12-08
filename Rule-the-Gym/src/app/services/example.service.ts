import { Injectable } from '@angular/core';
import { Example } from '../types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<Example[]> {
    return this.http.get<Example[]>('/api/example');
  }
  getItemById(id: string): Observable<Example> {
    return this.http.get<Example>(`/api/example/${id}`);
  }
  getItemsForUser(): Observable<Example[]> {
    return this.http.get<Example[]>('/api/example/users/12345/items');
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete(`/api/example/${id}`);
  }

  createItem(
    name: string,
    description: string,
    price: number
  ): Observable<Example> {
    return this.http.post<Example>(
      '/api/example',
      { name, description, price },
      httpOptions
    );
  }

  editItem(
    id: string,
    name: string,
    description: string,
    price: number
  ): Observable<Example> {
    return this.http.put<Example>(
      `/api/example/${id}`,
      { name, description, price },
      httpOptions
    );
  }
}
