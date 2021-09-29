import { Component, Host, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  profileBox: boolean = false;
  navbarfixed: boolean = false;
  length: any;
  isLogin = false;
  cart: any;

  
  constructor( private service: BookService,
    private route: Router,
    private cartService: CartService,
    private matSnackBar: MatSnackBar
) { }


  ngOnInit(): void  {

      this.displayCartBooks();

  }

  boxPopup() {
    this.profileBox = !this.profileBox;
  }

  Login() {
    this.route.navigate(['login']);
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    }else {
      this.navbarfixed = false;
    }
  }

  displayCartBooks() {
    
    this.cartService.getCartItemsForUser().subscribe((response: any) => {
      console.log(response)
      this.cart = response.data;
    });
  }

}