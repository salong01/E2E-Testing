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
        catchError(this.handleError<any>('User registration failed'))
      );
  }

  loggIn(user){
    return this.http.post<any>('/api/login', user, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('Loggin failed'))
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