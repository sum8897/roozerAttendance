import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer-notification',
  templateUrl: './customer-notification.component.html',
  styleUrls: ['./customer-notification.component.scss'],
})
export class CustomerNotificationComponent implements OnInit {

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
