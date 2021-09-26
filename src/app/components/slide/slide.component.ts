import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  signUpVisibility: boolean = false;

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  onSignUp() {
    this.signUpVisibility = true;
    this.route.navigateByUrl("sign-up");
  }

  onLogin() {
    this.signUpVisibility = false;
    this.route.navigateByUrl("login");
  }

}
