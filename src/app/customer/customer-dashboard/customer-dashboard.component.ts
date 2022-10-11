import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private auth: AuthService,
              private user: UserService,
              private router: Router) { }

  ngOnInit() {}
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
