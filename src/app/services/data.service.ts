import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private allBooks = new BehaviorSubject([]);
  receiveAllBooks = this.allBooks.asObservable();

  constructor() { }

  sendBooks(book: any)
  {
    this.allBooks.next(book);
  }
}