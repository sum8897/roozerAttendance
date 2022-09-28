import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.scss'],
})
export class EmpRegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  isActiveToggleTextPassword = true;
  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
  }
  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }
  onSubmit(contactForm) {
    // localStorage.setItem('user_role', 'customer');
    // this.router.navigateByUrl('/nav/mainpage')
    console.log(contactForm.value);
    console.log("form" + JSON.stringify(contactForm.value));
    this.router.navigateByUrl('/dashboard');
  }
  openLogin() {
    this.router.navigateByUrl('/login');
  }
}
