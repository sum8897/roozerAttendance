import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-notification',
  templateUrl: './admin-notification.component.html',
  styleUrls: ['./admin-notification.component.scss'],
})
export class AdminNotificationComponent implements OnInit {

  constructor(private user: UserService,
              private router: Router) { }

  ngOnInit() {}

}
