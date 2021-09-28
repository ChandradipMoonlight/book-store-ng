import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideComponent } from './components/slide/slide.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [

  {
    path: '', component: SlideComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent},
      { path: 'sign-up', component: SignUpComponent }
    ]
  },
  {
    path: 'home', component: DashboardComponent,
  children: [
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: 'books', component: DisplayBooksComponent },
    { path: 'cart', component: CartComponent }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
