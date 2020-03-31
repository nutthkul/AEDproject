import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
  goToStep2() {
    this.navCtrl.navigateRoot('/member2').then();
  }

  ngOnInit() {
  }

}
