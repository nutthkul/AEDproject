import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

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
