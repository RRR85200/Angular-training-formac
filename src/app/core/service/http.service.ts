import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, map, tap, throttle} from "rxjs/operators";

@Injectable()
export class HttpService {
serviceStatus = 'Down';

  constructor(private http: HttpClient) { }

  getNumber() : Observable<number> {
    return of(Math.random()*10);
  }

  getData(url:string) : Observable<Array<any>> {
    return this.http.get(url).pipe(
      tap(res => {
        console.log(res)
      }),
      map( (res: any) => {
        return res.slice(0,20);
      }), catchError( err => {
        return throwError('Failed api call')
      }))
  }


  postData(url: string, body:any) {
    return this.http.post(url, body)
  }



  delete(url: string) {}

}
