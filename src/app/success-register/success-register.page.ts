import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-success-register',
  templateUrl: './success-register.page.html',
  styleUrls: ['./success-register.page.scss'],
})
export class SuccessRegisterPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
  ngOnInit() {
  }

}
