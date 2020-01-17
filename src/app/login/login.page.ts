import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string;
  password: string;
  // tslint:disable-next-line:variable-name
  api_base_url: string;
  constructor(private storage: Storage, private http: HTTP) {
    this.storage.get('api_base_url').then((data) => {
      this.api_base_url = data;
    });
  }

  async setData(key: string, value: string) {
    await this.storage.set(key, value).then(() => true);
  }

  async getData(key: string) {
    await this.storage.get(key).then((data) => data);
  }

  login() {
    console.log(this.username);
    this.http.post(this.api_base_url, {username: this.username, password: this.password}, {})
        .then((response) => {
          console.log(response);
          this.setData('username', this.username).then();
          this.setData('password', this.password).then();
        });
  }
}
