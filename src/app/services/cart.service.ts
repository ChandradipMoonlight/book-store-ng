import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpService: HttpService) { }

  addToCart(data: any)
  {
    return this.httpService.addToCart( data);
  }

  removeFromCart(data: any)
  {
    return this.httpService.removeFromCart(data);
  }

  getCartItemsForUser()
  {
    return this.httpService.getCartBooks();
  }


}