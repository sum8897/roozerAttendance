import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.scss'],
})
export class EmpLoginComponent implements OnInit {

  constructor(private router: Router,
              private auth:AuthService,
              private user: UserService) { }

  ngOnInit() {}
  onSubmit(contactForm:any) {
    if(this.user.user_type==undefined){
      console.log('Please enter user type...');
     }else{
      console.log(this.user.user_type);
      console.log(contactForm.value);
      console.log("form" + JSON.stringify(contactForm.value));
      if(this.user.user_type=='employee'){
        this.router.navigateByUrl('/dashboard');
      }
      else if(this.user.user_type=='admin'){
        this.router.navigateByUrl('/admin-dashboard');
      }
      else{
        this.router.navigateByUrl('/customer-dashboard');
      }
      
     }
  }
  openSignUp(){
this.router.navigateByUrl('/register')
  }
}
