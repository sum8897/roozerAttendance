import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-date-wise',
  templateUrl: './date-wise.component.html',
  styleUrls: ['./date-wise.component.scss'],
})
export class DateWiseComponent implements OnInit {

  price:any;
  today:any;
  constructor( private alertController: AlertController,
             private user: UserService,
             private router: Router) {
              var today = new Date();
              var dd = String(today.getDate()).padStart(2, '0');
              var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
              var yyyy = today.getFullYear();
              
              this.today = mm + '/' + dd + '/' + yyyy;
              console.log(this.today)
    this.price=this.today;
   }

  ngOnInit() {}
  async selectPrice(){
    const alert = await this.alertController.create({
      header: 'Select Month',
 
      inputs: [
        {
          label: '01/10/2022',
          type: 'radio',
          value: '01/10/2022',
        },
        {
          label: '02/10/2022',
          type: 'radio',
          value: '02/10/2022',
        },
        {
          label: '03/10/2022',
          type: 'radio',
          value: '03/10/2022',
        },
        {
          label: '04/10/2022',
          type: 'radio',
          value: '04/10/2022',
        },
        {
          label: '05/10/2022',
          type: 'radio',
          value: '05/10/2022',
        },
        {
          label: '06/10/2022',
          type: 'radio',
          value: '06/10/2022',
        },
        {
          label: '07/10/2022',
          type: 'radio',
          value: '08/10/2022',
        },
        {
          label: '09/10/2022',
          type: 'radio',
          value: '09/10/2022',
        },
        {
          label: '10/10/2022',
          type: 'radio',
          value: '10/10/2022',
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
