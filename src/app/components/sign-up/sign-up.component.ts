import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user';
import { from } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm! : FormGroup;
  public user: User = new User;
  submitted = false;
  show: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.registerForm = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]) ,
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=[^@#$%^&+=]*[@#$%^&+=][^@#$%^&+=]*$)(?=.*[a-z])(?=.*[A-Z]).{8,}$")]),
      mobileNumber: new FormControl ('', [Validators.required, Validators.pattern("^[6-9][0-9]{9}$")])
    });

  }

  ngOnInit(): void {
  
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.user = this.registerForm.value;
    this.userService.signup(this.user).subscribe((response: any) => {
      console.log(response);
      this.router.navigateByUrl("login")
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

}
