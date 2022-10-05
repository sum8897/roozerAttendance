import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, {static: true}) routeroutlet: IonRouterOutlet;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  constructor(private alertController: AlertController,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private router: Router,
    private fcm: FCM,
    private location: Location,
              private platform: Platform,) {
    this.initializeApp();
    // this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();


      // this.fcm.subscribeToTopic('Deals');
      this.fcm.getToken().then(token => {
        console.log(token);
      });
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
      });
      // this.fcm.unsubscribeFromTopic('offers');
    });
  }
  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
        if (this.router.url != '/dashboard') {
          // await this.router.navigate(['/']);
          await this.location.back();
        } else if (this.router.url === '/dashboard') {
          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            this.presentAlertConfirm();
          } else {
            navigator['app'].exitApp();
          }
        }
      });
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Roozer Attendance Confirmation',
      message: 'Are you sure you want to exit the Roozer Attendance App?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });
  
    await alert.present();
  }
 
  // sideMenu()
  // {
  //   this.navigate =
  //   [

  //     {
  //       title : "Dashboard",
  //       url   : "/dashboard",
  //       icon  : "podium-outline"
  //     },
  //     {
  //       title : "Support",
  //       url   : "/dashboard",
  //       icon  : "call-outline"
  //     },
  //     {
  //       title : "LogIn",
  //       url   : "/login",
  //       icon  : "call-outline"
  //     },
  //     {
  //       title : "Register",
  //       url   : "/register",
  //       icon  : "call-outline"
  //     },

  //   ]
  // }
  logout(){
    this.router.navigate(['login'])
  }
}
