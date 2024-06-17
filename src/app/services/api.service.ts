import { Injectable } from '@angular/core';

//API imports
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  //API
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin' :'*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    })
  }
  apiURL = 'http://localhost:3000';


  constructor(private http:HttpClient) { }

  //metodos API
  getTests(): Observable<any>{
    return this.http.get(this.apiURL+'/test/').pipe(retry(3));
  }
  getTest(id:any):Observable<any>{
    return this.http.get(this.apiURL+'/test/'+id).pipe(retry(3));
  }
  createTest(post:any):Observable<any>{
    return this.http.post(this.apiURL+'/test/',post,this.httpOptions).pipe(retry(3));
  }
  updateTest(id: any,post:any):Observable<any>{ 
    return this.http.put(this.apiURL+'/test/'+id,post,this.httpOptions).pipe(retry(3)
    ); 
  }
  deleteTest(id: any):Observable<any>{ 
    return this.http.delete(this.apiURL+'/test/'+id,this.httpOptions);
  }
  //testing
  getPokemonList(): Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon?game_index=0').pipe(retry(3));
  }
  getPokemon(url:any): Observable<any>{
    return this.http.get(url).pipe(retry(3));
  }
}
