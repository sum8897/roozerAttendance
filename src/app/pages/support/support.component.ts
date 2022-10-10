import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {

  constructor(private router: Router,
    private user: UserService) { }

  ngOnInit() { }
  onSubmit(contactForm: any) {
    console.log(contactForm.value);
    console.log("form" + JSON.stringify(contactForm.value));

  }
  dashboard() {
    this.router.navigateByUrl('/dashboard');
  }
  profile() {
    this.router.navigateByUrl('/attendace_page');
  }
  attendance() {
    this.router.navigateByUrl('/attendace_page');
  }
  notifications() {
    this.router.navigateByUrl('/notification');
  }
}
