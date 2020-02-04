import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-add-aed2',
  templateUrl: './add-aed2.page.html',
  styleUrls: ['./add-aed2.page.scss'],
})
export class AddAed2Page implements OnInit {

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }

}


