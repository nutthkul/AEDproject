import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-my-aed',
  templateUrl: './my-aed.page.html',
  styleUrls: ['./my-aed.page.scss'],
})
export class MyAedPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
  ngOnInit() {
  }

}
