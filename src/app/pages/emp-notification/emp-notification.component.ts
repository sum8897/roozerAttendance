import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-emp-notification',
  templateUrl: './emp-notification.component.html',
  styleUrls: ['./emp-notification.component.scss'],
})
export class EmpNotificationComponent implements OnInit {

  constructor(private user: UserService,
    private router: Router) { }

  ngOnInit() { }

  dashboard() {
    this.router.navigateByUrl('/dashboard');
  }
  attendance() {
    this.router.navigateByUrl('/attendace_page');
  }
  notifications() {
    this.router.navigateByUrl('/notification');
  }
}
