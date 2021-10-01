import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  baseUrl = environment.baseUrl;
  token:any= localStorage.getItem('token');

  constructor(private httpClient: HttpClient) { }

  postService(url: string, data: any, token: any, headers: boolean) {

    return this.httpClient.post(this.baseUrl + url, data);
  }



    getBooks(url: any) {
      
    return this.httpClient.get(this.baseUrl + url)
  }

  addToCart(data: any)
  {
    
    return this.httpClient.post(this.baseUrl + `add-to-cart?token=${this.token}`, data);
  }

  removeFromCart(cartId: any)
  {
    
    return this.httpClient.delete(this.baseUrl + `delete-form-cart?token=${this.token}&cartId=${cartId}`);
  }

  getCartBooks() {
  
    return this.httpClient.get(this.baseUrl + `get-cart-items-for-user?token=${this.token}`);
  }

  placeOrder(data: any) {

    // return this.httpClient.post(this.baseUrl+`palce-order?token=${this.token}`, data)

    return this.httpClient.post("http://localhost:8080/place-order?token="+this.token, data)
    
  }
}