import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { DataService } from 'src/app/services/data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {
  
    books: any;

    searchKey: string = '';

    cart: any;

    value: any = [];

    bookIntoCart: boolean = false;
  
    constructor(private bookService: BookService,
      private dataService: DataService,
      private route: Router,
      private cartService: CartService) { }
  
    ngOnInit(): void
    {
      this.displayBooks();
      this.bookService.search.subscribe((val: any) => {
        this.searchKey = val;
      })
    }
  
    displayBooks()
    {
      this.bookService.getBooks('get-all-books').subscribe((response: any) =>
      {
        console.log(response);
        this.books = response.data;
        console.log(this.books);
        this.displayCartBooks();
      })
    }

    addToCart(data: any) {
    
      this.cartService.addToCart(data).subscribe((response: any)=> {
        console.log(response);
        this.bookIntoCart = true;
        this.ngOnInit();
      })
    }

    displayCartBooks() {
      this.cartService.getCartItemsForUser().subscribe((response: any) => {
        console.log(response);
        this.cart = response.data;
        console.log(this.cart.bookModel);
      });
    }
  
  }