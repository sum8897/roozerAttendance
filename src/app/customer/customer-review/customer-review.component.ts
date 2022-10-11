import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.scss'],
})
export class CustomerReviewComponent implements OnInit {

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
testimonial_data=[
  {
    id:1,
    name:'Sundar Prasad',
    data:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s ',
  },
  {
    id:2,
    name:'Pyari Mohan Mohapatra',
    data:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s ',
  },
  {
    id:3,
    name:'Sakriya Sampad Paikaray',
    data:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s ',
  },
  {
    id:4,
    name:'Raghunandan Dani',
    data:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s ',
  },
  {
    id:5,
    name:'Priyadarshini Mohapatra',
    data:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s ',
  },
]
}
