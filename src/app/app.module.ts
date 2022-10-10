import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { FCM } from '@awesome-cordova-plugins/fcm/ngx';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpLoginComponent } from './pages/emp-login/emp-login.component';
import { EmpRegisterComponent } from './pages/emp-register/emp-register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SupportComponent } from './pages/support/support.component';
import { AttendaceListComponent } from './pages/attendace-list/attendace-list.component';
import { HolidayListComponent } from './pages/holiday-list/holiday-list.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminEmpListComponent } from './admin/admin-emp-list/admin-emp-list.component';
import { AdminSingleEmpComponent } from './admin/admin-single-emp/admin-single-emp.component';
import { DateWiseComponent } from './admin/date-wise/date-wise.component';
import { AdminNotificationComponent } from './admin/admin-notification/admin-notification.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmpLoginComponent,
    EmpRegisterComponent,
    ProfileComponent,
    SupportComponent,
    AttendaceListComponent,
    HolidayListComponent,
    AdminDashboardComponent,
    AdminEmpListComponent,
    AdminSingleEmpComponent,
    DateWiseComponent,
    AdminNotificationComponent,
    AdminProfileComponent
  ],
  imports: [ 
            BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            FontAwesomeModule,],
  providers: [
    Platform,
    StatusBar,
    SplashScreen,
    FCM,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }],
  bootstrap: [AppComponent],
})
export class AppModule { 

  constructor(library: FaIconLibrary) { 
		library.addIconPacks(fas, fab, far);
	}
}
