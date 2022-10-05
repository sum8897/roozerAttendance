import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(private user:UserService,
             private router: Router) { }

  ngOnInit() {}
  onSubmit(contactForm:any) {
    console.log(contactForm.value);
    console.log("form" + JSON.stringify(contactForm.value));

  }
  dashboard(){
    this.router.navigateByUrl('/dashboard');
  }
 
      attendance(){
        this.router.navigateByUrl('/attendace_page');
      }
    notifications(){
      this.router.navigateByUrl('/notification');
    }
}
