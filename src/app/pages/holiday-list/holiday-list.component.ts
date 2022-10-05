import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss'],
})
export class HolidayListComponent implements OnInit {

  price
  constructor( private alertController: AlertController,) {
    this.price="South Region";
   }

  ngOnInit() {}
  async selectPrice(){
    const alert = await this.alertController.create({
      header: 'Select Region',
 
      inputs: [
        {
          label: 'East Region',
          type: 'radio',
          value: 'East Region',
        },
        {
          label: 'West Region',
          type: 'radio',
          value: 'West Region',
        },
        {
          label: 'South Region',
          type: 'radio',
          value: 'Mar 2022',
        },
        {
          label: 'North Region',
          type: 'radio',
          value: 'North Region',
        },
        
      ],
      buttons: [
     {
      text:'ok',
      role: 'confirm',
     handler:(alert)=>{
      this.price=alert;
     console.log(alert);
     if(alert==undefined){
       console.log('error.. please select one')
     }
     },
     }
      ],
    });

    await alert.present();
  }
  attendance=[
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

  holiday=[
    {
id: 1,
name: "New Year's Day ",
date: 'Jan 1',
day: 'Sunday'
    },
    {
      id: 2,
      name: "Makar Sankranti ",
      date: 'Jan 14',
      day: 'Saturday'
    },
    {
      id: 3,
      name: "New Year's Day ",
      date: 'Jan 1',
      day: 'Sunday'
          },
          {
            id: 4,
            name: "Makar Sankranti ",
            date: 'Jan 14',
            day: 'Saturday'
          },
          {
            id: 5,
            name: "New Year's Day ",
            date: 'Jan 1',
            day: 'Sunday'
          },
          {
            id: 6,
            name: "Makar Sankranti ",
            date: 'Jan 14',
            day: 'Saturday'
          },
          {
            id: 7,
            name: "Makar Sankranti ",
            date: 'Jan 14',
            day: 'Saturday'
          },
          {
            id: 8,
            name: "New Year's Day ",
            date: 'Jan 1',
            day: 'Sunday'
          },
          {
            id: 9,
            name: "Makar Sankranti ",
            date: 'Jan 14',
            day: 'Saturday'
          },
  ]
}
