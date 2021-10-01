import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DisplayBooksComponent } from '../display-books/display-books.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { OrderDetails } from '../../../models/order-details';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public customerFormGroup!: FormGroup;

  cart: any;
  cartId: any;
  data: any;
  public orderDetails: OrderDetails = new OrderDetails;

  books=[];
  isShow: boolean = false;
  isOrder: boolean = false;

  constructor(private cartService: CartService,
              private route: Router,
              private formBuilder: FormBuilder,
              private orderService: OrderService) {
      this.customerFormGroup = this.formBuilder.group({
        fullName: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
        mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^[6-9][0-9]{9}$")]),
        zip: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{6}$")]),
        locality: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
        address: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
        city: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
        state: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
        addressType: [''],
        bookId: [''],
        userId: [''],
        orderQuantity: [''],
        orderPrice: [''],
      })
     }

  ngOnInit(): void
  {
    this.displayCartBooks();
  }

  
  displayCartBooks() {
    this.cartService.getCartItemsForUser().subscribe((response: any) => {
      console.log(response);
      this.cart = response.data;
      console.log(this.cart.bookModel);
    });
  }

  removeFromCart(cartId: any) {
    this.cartService.removeFromCart(cartId).subscribe((response: any) =>{
      console.log(response);
      this.ngOnInit();
    });
  }

  show() {
    this.isShow = true;

  }

  showOrderSummery() {
    this.isOrder = true;
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.customerFormGroup.controls[controlName].hasError(errorName);
  }

  placeOrder() {

    this.cart.forEach((element:any) => {
      this.customerFormGroup.patchValue({
        bookId: element.bookModel.bookId,
        userId: element.userModel.userId,
        orderQuantity: element.bookModel.bookQuantity,
        orderPrice: element.bookModel.bookPrice,
      });
      this.orderDetails = this.customerFormGroup.value;
    
      this.orderService.placeOrder(this.orderDetails).subscribe(reponse => {
        console.log(reponse)
        this.removeFromCart(element.cartId);
        this.route.navigateByUrl("order");
      });
    });
  }

}
