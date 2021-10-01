import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

public search = new BehaviorSubject<string>("");

  constructor(private httpService: HttpService) { }

  getBooks(url: any)
  {
    return this.httpService.getBooks('get-all-books');
  }
}
