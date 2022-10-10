import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router,
              private user: UserService,
              private auth: AuthService) { }

  ngOnInit() {}
  attendanceData=[
    {
      id: 1,
      date: '01/08/22',
      check_in: '10:00 am',
      check_out: '07:00 pm'
    },
    {
      id: 2,
      date: '02/08/22',
      check_in: '10:00 am',
      check_out: '07:00 pm'
    },
    {
      id: 3,
      date: '03/08/22',
      check_in: '10:00 am',
      check_out: '07:00 pm'
    },
    {
      id: 4,
      date: '04/08/22',
      check_in: '10:00 am',
      check_out: '07:00 pm'
    },
    {
      id: 5,
      date: '05/08/22',
      check_in: '10:00 am',
      check_out: '07:00 pm'
    },
    {
      id: 6,
      date: '06/08/22',
      check_in: '10:00 am',
      check_out: '07:00 pm'
    },
    {
      id: 7,
      date: '07/08/22',
      check_in: '10:00 am',
      check_out: '07:00 pm'
    },
    {
      id: 8,
      date: '08/08/22',
      check_in: '10:00 am',
      check_out: '07:00 pm'
    },
    {
      id:9,
      date: '09/08/22',
      check_in: '10:00 am',
      check_out: '07:00 pm'
    },
    {
      id:10,
      date: '10/08/22',
      check_in: '10:00 am',
      check_out: '07:00 pm'
    },
  ]
  adminDashboard(){
    this.router.navigateByUrl('/admin-dashboard');
  }
  adminProfile(){
    this.router.navigateByUrl('/admin-profile');
  }
  empList(){
    this.router.navigateByUrl('/admin-emp-list');
  }
  adminNotifications(){
    this.router.navigateByUrl('/admin-notification');
  }
}
