import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  profileBox: boolean = false;

  
  constructor(private route: Router) { }

  ngOnInit(): void
  {
  }
  boxPopup()
  {
    this.profileBox = !this.profileBox;
  }
  Login()
  {
    this.route.navigate(['login']);
  }
}