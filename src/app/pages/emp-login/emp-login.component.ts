import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.scss'],
})
export class EmpLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  onSubmit(contactForm) {
    // localStorage.setItem('user_role', 'customer');
    // this.router.navigateByUrl('/nav/mainpage')
    console.log(contactForm.value);
    console.log("form" + JSON.stringify(contactForm.value));
    this.router.navigateByUrl('/dashboard');
  }
  openSignUp(){
this.router.navigateByUrl('/register')
  }
}
