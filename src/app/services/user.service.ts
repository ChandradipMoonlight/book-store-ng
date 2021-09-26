import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor(private httpService: HttpService) { }
  // constructor(private httpClient: HttpClient) { }

  // private baseUrl = environment.baseUrl;

  // login(data: any)
  // {
  //   return this.httpClient.post(this.baseUrl+"login", data);
  // }

  // signup(data: any)
  // {
  //   return this.httpClient.post(this.baseUrl+"signup", data);
  // }

  // forget(data: any)
  // {
  //   return this.httpClient.post(this.baseUrl+"forget-password", data);
  // }
}
