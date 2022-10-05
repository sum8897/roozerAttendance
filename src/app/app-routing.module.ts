import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AttendaceListComponent } from './pages/attendace-list/attendace-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpLoginComponent } from './pages/emp-login/emp-login.component';
import { EmpRegisterComponent } from './pages/emp-register/emp-register.component';
import { HolidayListComponent } from './pages/holiday-list/holiday-list.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SupportComponent } from './pages/support/support.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: EmpLoginComponent
  },
  {
    path: 'register',
    component: EmpRegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'attendace_page',
    component: AttendaceListComponent
  },
  {
    path: 'holiday',
    component: HolidayListComponent
  },
  {
    path: 'sidenav',
    loadChildren: () => import('./sidenav/sidenav.module').then( m => m.SidenavPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
