import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService: HttpService) { }

  getBooks(url: any)
  {
    return this.httpService.getBooks('get-all-books');
  }
}
