import { Injectable } from '@angular/core';
import { User } from './users';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post<any>('/api/register', user, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('Add User'))
      );
  }

  loggIn(user){
    console.log(user)
    return this.http.post<any>('/api/login', user, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('Loggin failed'))
      );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/login', this.httpOptions)
      .pipe(
        tap(users => {
          return console.log('User retrieved!');
        }),
        catchError(this.handleError<User[]>('Get Users', []))
      );
  }

  getUser(id): Observable<User[]> {
    return this.http.get<User[]>('/api/login/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User retrieved: ${id}`)),
        catchError(this.handleError<User[]>(`Get User id=${id}`))
      );
  }

  deleteUser(id): Observable<User[]> {
    return this.http.delete<User[]>('/api//' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User deleted: ${id}`)),
        catchError(this.handleError<User[]>('Delete User'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}