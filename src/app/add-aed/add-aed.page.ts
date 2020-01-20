import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-add-aed',
  templateUrl: './add-aed.page.html',
  styleUrls: ['./add-aed.page.scss'],
})
export class AddAedPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
  ngOnInit() {
  }

}
