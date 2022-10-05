import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private actionSheetCtrl: ActionSheetController,
              private router: Router) { }

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
          handler: () => {
            console.log('Profile Edit clicked');
            this.router.navigateByUrl('/support');
          }
        },
        {
          text: 'Holi Day List',
          icon: 'calendar-clear-outline',
          handler: () => {
            console.log('Holiday clicked');
            this.router.navigateByUrl('/holiday');
          }
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
}
