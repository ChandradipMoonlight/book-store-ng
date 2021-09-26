import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  baseUrl = environment.baseUrl;
  token: any;

  constructor(private httpClient: HttpClient) { }

  post(url: string, data: any, token: any, headers: boolean) {
    return this.httpClient.post(this.baseUrl + url, data);
  }
}