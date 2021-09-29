import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpService: HttpService) { }

  placeOrder(data: any): Observable<any> {
    
    return this.httpService.placeOrder( data);
  }
}
