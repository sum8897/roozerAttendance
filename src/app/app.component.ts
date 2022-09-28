import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private alertController: AlertController,
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private router: Router,
    private fcm: FCM) {
    this.initializeApp();
    this.sideMenu();
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
  navigate:any;
  sideMenu()
  {
    this.navigate =
    [

      {
        title : "Dashboard",
        url   : "/dashboard",
        icon  : "podium-outline"
      },
      {
        title : "Support",
        url   : "/dashboard",
        icon  : "call-outline"
      },
      {
        title : "LogIn",
        url   : "/login",
        icon  : "call-outline"
      },
      {
        title : "Register",
        url   : "/register",
        icon  : "call-outline"
      },

    ]
  }
  logout(){
    this.router.navigate(['login'])
  }
}
