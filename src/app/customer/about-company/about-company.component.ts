import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss'],
})
export class AboutCompanyComponent implements OnInit {

  constructor(private auth: AuthService,
    private user: UserService,
    private router: Router) { }

  ngOnInit() {}
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
