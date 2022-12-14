import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-single-emp',
  templateUrl: './admin-single-emp.component.html',
  styleUrls: ['./admin-single-emp.component.scss'],
})
export class AdminSingleEmpComponent implements OnInit {

  constructor(private alertController: AlertController,
             private router: Router,
            private user: UserService) { }
  price:any;
  ngOnInit() {}
  async selectPrice(){
    const alert = await this.alertController.create({
      header: 'Select Month',
 
      inputs: [
        {
          label: 'Jan 2022',
          type: 'radio',
          value: 'Jan 2022',
        },
        {
          label: 'Feb 2022',
          type: 'radio',
          value: 'Feb 2022',
        },
        {
          label: 'Mar 2022',
          type: 'radio',
          value: 'Mar 2022',
        },
        {
          label: 'Apr 2022',
          type: 'radio',
          value: 'Apr 2022',
        },
        {
          label: 'May 2022',
          type: 'radio',
          value: 'May 2022',
        },
        {
          label: 'Jun 2022',
          type: 'radio',
          value: 'Jun 2022',
        },
        {
          label: 'Jul 2022',
          type: 'radio',
          value: 'Jul 2022',
        },
        {
          label: 'Aug 2022',
          type: 'radio',
          value: 'Aug 2022',
        },
        {
          label: 'Sep 2022',
          type: 'radio',
          value: 'Sep 2022',
        },
        {
          label: 'Oct 2022',
          type: 'radio',
          value: 'Oct 2022',
        },
      ],
      buttons: [
     {
      text:'ok',
      role: 'confirm',
     handler:(alert)=>{
      this.price=alert;
     console.log(alert)
     },
     }
      ],
    });

    await alert.present();
  }
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
