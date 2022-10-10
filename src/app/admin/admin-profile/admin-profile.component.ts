import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {

  constructor(private user:UserService,
    private router: Router) { }

ngOnInit() {}
onSubmit(contactForm:any) {
console.log(contactForm.value);
console.log("form" + JSON.stringify(contactForm.value));

}
adminDashboard(){
  this.router.navigateByUrl('/admin-dashboard');
}
adminProfile(){
  this.router.navigateByUrl('/admin-profile');
}
empList(){
  this.router.navigateByUrl('/admin-emp-list');
}
adminNotifications(){
  this.router.navigateByUrl('/admin-notification');
}
}
