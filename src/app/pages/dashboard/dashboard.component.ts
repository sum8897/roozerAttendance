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

 
  userProfile(){
this.router.navigateByUrl('/profile');
  }
  attendance(){
    this.router.navigateByUrl('/attendace_page');
  }
notifications(){
  this.router.navigateByUrl('/notification');
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
