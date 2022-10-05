import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
punchIn:boolean=true;
punchOut:boolean=false;
  constructor(private actionSheetCtrl: ActionSheetController,
              private auth :AuthService,
              private user: UserService,
              private router: Router
              ) { }

  ngOnInit() {}

  async menuOpen(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Roozer Technologies',
      // subHeader: 'Example subheader',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Profile',
          icon: 'person-outline',
          // role: 'destructive',
          handler: () => {
            console.log('Profile Edit clicked');
            this.router.navigateByUrl('/profile');
          }  
        },
        {
          text: 'Contact Us',
          icon: 'call-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    actionSheet.present();

  }

// data=[
//   {
//     id:1,
//     date: 2
//   },
//   {
//     id:1,
//     date: 2
//   },
//   {
//     id:1,
//     date: 2
//   },
//   {
//     id:1,
//     date: 2
//   },
//   {
//     id:1,
//     date: 2
//   },
//   {
//     id:1,
//     date: 2
//   },
//   {
//     id:1,
//     date: 2
//   },
//   {
//     id:1,
//     date: 2
//   },
//   {
//     id:1,
//     date: 2
//   },
//   {
//     id:1,
//     date: 2
//   },
//   {
//     id:1,
//     date: 2
//   },
//   {
//     id:1,
//     date: 2
//   },
//   {
//     id:1,
//     date: 2
//   },
// ]
}
