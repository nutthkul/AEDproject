// import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
// import { HTTP } from '@ionic-native/http/ngx';
import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import {NavController} from '@ionic/angular';
// import {json} from '@angular-devkit/core';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  phoneNo: string;
  password: string;
  role: string;
  // tslint:disable-next-line:variable-name
  api_base_url: string;
  constructor(private storage: Storage, private http: HttpClient, public navCtrl: NavController) {
    this.storage.get('api_base_url').then((data) => {
      this.api_base_url = data;
    });
  }

  async setData(key: string, value: string) {
    await this.storage.set(key, value).then(() => true);
  }

  async getData(key: string) {
    await this.storage.get(key).then((data) => data);
    console.log('role is', data);
  }

  login() {
    this.http.post(this.api_base_url + '/login', {phoneNo: this.phoneNo, password: this.password}, {})
        .subscribe((response) => {

          const aaa = JSON.stringify(response);
          const datas = JSON.parse(aaa);
          const status = datas.response_code;
          const role = datas.data.result[0].roleId;
          // console.log(aaa.response_code);
          // login success
          if (status === '0000') {
              console.log('login pass');
              this.setData('role', role);
              if (role === '1') {
                  this.goToHome();
              } else {
                  this.goToHome();
              }
          } else { // login fail
              console.log('login fail');
          }
          this.setData('telephone', this.phoneNo).then();
          this.setData('password', this.password).then();
        });
    // this.goToHome();
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
}
