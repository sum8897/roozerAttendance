import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer-query',
  templateUrl: './customer-query.component.html',
  styleUrls: ['./customer-query.component.scss'],
})
export class CustomerQueryComponent implements OnInit {

  constructor(private auth: AuthService,
    private user: UserService,
    private router: Router) { }

  ngOnInit() { }
  onSubmit(contactForm: any) {
    console.log(contactForm.value);
    console.log("form" + JSON.stringify(contactForm.value));

  }
  customerDashboard(){
    this.router.navigateByUrl('customer-dashboard');
  }
  customerProfile(){
    this.router.navigateByUrl('customer-profile');
      }
      customerQuery(){
        this.router.navigateByUrl('customer-review');
      }
      notifications(){
        this.router.navigateByUrl('customer-notification');
      }
}
