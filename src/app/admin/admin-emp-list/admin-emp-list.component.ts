import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-emp-list',
  templateUrl: './admin-emp-list.component.html',
  styleUrls: ['./admin-emp-list.component.scss'],
})
export class AdminEmpListComponent implements OnInit {

  constructor(private router: Router,
              private user: UserService) { }

  ngOnInit() {}


  emp_list=[
    {
      id:1,
      name:'Ashish Chaurasiya',
      emp_id: 56654,
      deprt: 'Senior Hybrid App Developer'
    },
    {
      id:2,
      name:'Shiva Chaurasiya',
      emp_id: 56656,
      deprt: 'Senior backend Developer'
    },
    {
      id:3,
      name:'Smile Chaurasiya',
      emp_id: 56657,
      deprt: 'Backend Developer'
    },
    {
      id:4,
      name:'Ashish Chaurasiya',
      emp_id: 56658,
      deprt: 'Senior Hybrid App Developer'
    },
    {
      id:5,
      name:'Dhara',
      emp_id: 56659,
      deprt: 'Graphics Designer'
    },
    {
      id:6,
      name:'Jobin Johnson',
      emp_id: 56660,
      deprt: 'Tester'
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
