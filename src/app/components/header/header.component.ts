import { Component, OnInit } from '@angular/core';
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

  length: any;
  isLogin = false;

  
  constructor( private service: BookService,
    private route: Router,
    private cartService: CartService,
    private matSnackBar: MatSnackBar
) { }



  ngOnInit(): void  {
  }

  boxPopup() {
    this.profileBox = !this.profileBox;
  }

  Login() {
    this.route.navigate(['login']);
  }

  // getCartItemCount() {
  //   this.cartService.getCartItemCount().subscribe((response: any) => {
  //     this.length = response.obj;
  //     console.log('total number of itemes are' + response.obj);
  //    });
  // }
}