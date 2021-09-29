import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DisplayBooksComponent } from '../display-books/display-books.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: any;
  cartId: any;

  books=[];

  constructor(private cartService: CartService,
    private route: Router) { }

  ngOnInit(): void
  {
    this.displayCartBooks();
  }

  
  displayCartBooks() {
    
    this.cartService.getCartItemsForUser().subscribe((response: any) => {
      console.log(response);
      this.cart = response.data;
      console.log(this.cart);
      console.log(this.cart.bookModel);
    });

  }

  removeFromCart(cartId: any) {
    this.cartService.removeFromCart(cartId).subscribe((response: any) =>{
      console.log(response);
      this.ngOnInit();
    });
  }
}
