import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.scss'],
})
export class EmpRegisterComponent implements OnInit {

  constructor(private router: Router,
              private alertController: AlertController,
              private user: UserService) { }

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
