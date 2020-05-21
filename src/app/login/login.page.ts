// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Events } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  mobileNo: any;
  password: any;
  constructor(
    private storage: Storage,
    private router: Router,
    public rest: RestService,
    public events: Events,
    public navCtrl: NavController,
  ) {
  }

  async setData(key: string, value: string) {
    await this.storage.set(key, value).then(() => true);
  }

  async getData(key: string) {
    await this.storage.get(key).then((data) => data);
    // console.log('role is', data);
  }
  login() {
    // this.router.navigate(['/home']);
    const param = {
      mobileNo: this.mobileNo,
      password: this.password
    };

    this.rest.login(param).then((result: any) => {
      console.log(result);
      if (result.userType === 'P') {
        // console.log(result.data.result[0]);
        this.storage.set('userId', result).then(userId => {
          this.events.publish('user:login');
          // console.log(this.storage.get('userId'));
        });
        this.router.navigate(['/home']);
      } else {
        console.log('cannot Login');
      }
    });
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
  register() {
    this.router.navigate(['/register']);
  }
}
