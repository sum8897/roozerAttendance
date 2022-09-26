import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpLoginComponent } from './pages/emp-login/emp-login.component';
import { EmpRegisterComponent } from './pages/emp-register/emp-register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SupportComponent } from './pages/support/support.component';

@NgModule({
  declarations: [
                 AppComponent,
                 DashboardComponent,
                 EmpLoginComponent,
                 EmpRegisterComponent,
                 ProfileComponent,
                 SupportComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Platform,
    StatusBar,
    SplashScreen,
    FCM,
        { provide: RouteReuseStrategy, 
              useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
