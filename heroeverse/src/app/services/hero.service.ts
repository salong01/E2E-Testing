import { Injectable } from '@angular/core';
import { Hero } from './heroes';
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


  // GET heroes from the server
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl, this.httpOptions)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('Get all heroes', []))
      );
  }

  getHero(name): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl + '/' + name, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Hero retrieved ${name}`)),
        catchError(this.handleError<Hero>(`Get hero ${name}`))
      );
  }

  addUserHero(userHero){
    return this.http.post<any>(this.heroesUrl + '/' + userHero.hero, userHero, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('Adding hero to user list failed'))
      );
  }

  removeUserHero(userHero){
    return this.http.put<any>(this.heroesUrl + '/' + userHero.hero, userHero, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('Adding hero to user list failed'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
