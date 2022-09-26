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
    private router : Router,
    private fcm: FCM) {
      this.initializeApp();
    }

    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();

              // subscribe to a topic
      // this.fcm.subscribeToTopic('Deals');
      // get FCM token
      this.fcm.getToken().then(token => {
        console.log(token);
      });
      // ionic push notification example
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });      
      // refresh the FCM token
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
      });
      // unsubscribe from a topic
      // this.fcm.unsubscribeFromTopic('offers');


      });
    }
  
}
