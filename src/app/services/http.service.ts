import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  baseUrl = environment.baseUrl;
  token: any;

  constructor(private httpClient: HttpClient) { }

  postService(url: string, data: any, token: any, headers: boolean) {

    return this.httpClient.post(this.baseUrl + url, data);
  }

    getBooks(url: any) {
      
    return this.httpClient.get(this.baseUrl + url)
  }

  addToCart(data: any)
  {
    this.token = localStorage.getItem('token');
    
    return this.httpClient.post(this.baseUrl + `add-to-cart?token=${this.token}`, data);
  }

  removeFromCart(cartId: any)
  {
    this.token = localStorage.getItem('token');
    
    return this.httpClient.delete(this.baseUrl + `delete-form-cart?token=${this.token}&cartId=${cartId}`);
  }

  getCartBooks()
  {
    this.token = localStorage.getItem('token');
  
    return this.httpClient.get(this.baseUrl + `get-cart-items-for-user?token=${this.token}`);
  }
}