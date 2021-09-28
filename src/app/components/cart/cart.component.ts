import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: any;
  cartId: any;

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
    })
  }

  removeFromCart(id: any) {
    this.cartService.removeFromCart(id).subscribe((response: any) =>
    {
      console.log(response);
      this.ngOnInit();
    });
  }
}
