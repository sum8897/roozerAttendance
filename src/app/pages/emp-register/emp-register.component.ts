import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.scss'],
})
export class EmpRegisterComponent implements OnInit {

  constructor(private router: Router,
              private alertController: AlertController,) { }

  ngOnInit() { }
  isActiveToggleTextPassword = true;
  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
  }
  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }
  onSubmit(contactForm) {
    // localStorage.setItem('user_role', 'customer');
    // this.router.navigateByUrl('/nav/mainpage')
    console.log(contactForm.value);
    console.log("form" + JSON.stringify(contactForm.value));
    this.router.navigateByUrl('/dashboard');
  }
  price:any;
  async selectPrice(){
    const alert = await this.alertController.create({
      header: 'Select Price',
 
      inputs: [
        {
          label: '250',
          type: 'radio',
          value: '250',
        },
        {
          label: '500',
          type: 'radio',
          value: '500',
        },
        {
          label: '600',
          type: 'radio',
          value: '600',
        },
        {
          label: '800',
          type: 'radio',
          value: '800',
        },
        {
          label: '1000',
          type: 'radio',
          value: '1000',
        },
      ],
      buttons: [
     {
      text:'ok',
      role: 'confirm',
     handler:(user_type)=>{
      this.price=user_type;
    
     if(user_type==undefined){
      console.log('please enter user type...');
     }else{
      console.log(user_type);
     }
     },
     }
      ],
    });

    await alert.present();
  }
  openLogin() {
    this.router.navigateByUrl('/login');
  }
}
