import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-member',
  templateUrl: './member2.page.html',
  styleUrls: ['./member2.page.scss'],
})
export class Member2Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
  goToSuccess() {
    this.navCtrl.navigateRoot('/success-register').then();
  }

  ngOnInit() {
  }

}
