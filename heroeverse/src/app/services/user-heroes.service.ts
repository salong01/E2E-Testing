import { Injectable } from '@angular/core';

import { UserHero } from './user-hero';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserHeroesService {

  private userHeroesUrl = '/api/userList';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getUserHeroes(userHero): Observable<any[]>{
    return this.http.get<any>(this.userHeroesUrl + "/" + userHero, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User Heroes retrieved for ${userHero}`)),
        catchError(this.handleError<any[]>(`Get all user heroes from user ${userHero}`))
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
