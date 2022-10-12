import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user_type:any;
  constructor(private actionSheetCtrl: ActionSheetController,
              private router: Router,
              private alertController: AlertController,) { }
              async selectUserType(){
                const alert = await this.alertController.create({
                  header: 'Select User Type',
             
                  inputs: [
                    {
                      label: 'admin',
                      type: 'radio',
                      value: 'admin',
                    },
                    {
                      label: 'employee',
                      type: 'radio',
                      value: 'employee',
                    },
                    {
                      label: 'customer',
                      type: 'radio',
                      value: 'customer',
                    },
                  ],
                  buttons: [
                 {
                  text:'ok',
                  role: 'confirm',
                 handler:(user_type)=>{
                  this.user_type=user_type;
                
                 if(user_type==undefined){
                  console.log('Please enter user type...');
                 }else{
                  console.log(user_type);
                 }
                 },
                 }
                  ],
                });
            
                await alert.present();
              }

  async menuOpen(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Roozer Technologies',
      // subHeader: 'for Employee',
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
          icon: 'mail-outline',
          handler: () => {
            console.log('Profile Edit clicked');
            this.router.navigateByUrl('/support');
          }
        },
        {
          text: 'Holiday',
          icon: 'calendar-clear-outline',
          handler: () => {
            console.log('Holiday clicked');
            this.router.navigateByUrl('/holiday');
          }
        },
        {
          text: 'Sign out',
          icon: 'log-out-outline',
          handler: () => {
            this.logout();
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

  async menuAdminOpen(){
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
            this.router.navigateByUrl('/admin-profile');
          }  
        },
        {
          text: 'Holiday',
          icon: 'calendar-clear-outline',
          handler: () => {
            console.log('Holiday clicked');
            this.router.navigateByUrl('/admin-holiday');
          }
        },
        {
          text: 'Sign out',
          icon: 'log-out-outline',
          handler: () => {
            this.logout();
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
  async customermenuOpen(){
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
            this.router.navigateByUrl('/customer-profile');
          }  
        },
        {
          text: 'Testimonials',
          icon: 'people-outline',
          // role: 'destructive',
          handler: () => {
            console.log('Profile Edit clicked');
            this.router.navigateByUrl('/customer-review');
          }  
        },
        {
          text: 'About Us',
          icon: 'person-outline',
          // role: 'destructive',
          handler: () => {
            console.log('Profile Edit clicked');
            this.router.navigateByUrl('/aboutus');
          }  
        },
        {
          text: 'Sign out',
          icon: 'log-out-outline',
          handler: () => {
            this.logout();
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
  logout(){
    localStorage.clear();
    localStorage.removeItem('roozer_token');
    this.router.navigateByUrl('/login');
  }
}
