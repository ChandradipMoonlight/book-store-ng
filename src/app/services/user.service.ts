import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }


  login(data: any): Observable<any> {
    return this.httpService.postService("login", data, null, false);
  }

  signup(data: any): Observable<any> {
    return this.httpService.postService("signup", data, null, false);
  }

  forget(data: any): Observable<any> {
    return this.httpService.postService("forget-password", data, null, false);
  }
}
