import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>('/api/heroes')
  //     .pipe(
  //       tap(heroes => console.log('Heroes retrieved!')),
  //       catchError(this.handleError<Hero[]>('Get Heroes', []))
  //     );
  // }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(name): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl + "/" + name)
      .pipe(
        tap(_ => console.log(`Hero retrieved: ${name}`)),
        catchError(this.handleError<Hero[]>(`Get hero name=${name}`))
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
