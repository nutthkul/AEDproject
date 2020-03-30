// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
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
    public events: Events
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
    const param = {
      mobileNo: this.mobileNo,
      password: this.password
    };

    this.rest.login(param).then((result: any) => {
      console.log(result);
      if (result.status !== '500') {
        // console.log(result.data.result[0]);
        this.storage.set('userId', result).then(userId => {
          this.events.publish('user:login');
        });
        this.router.navigate(['/home']);
      } else {
        alert(result.response_description);
      }
    });
    // this.goToHome();
  }
  register() {
    this.router.navigate(['/member']);
  }
}
