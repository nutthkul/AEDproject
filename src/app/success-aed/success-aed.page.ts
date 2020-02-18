import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-success-aed',
  templateUrl: './success-aed.page.html',
  styleUrls: ['./success-aed.page.scss'],
})
export class SuccessAedPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
  ngOnInit() {
  }

}
