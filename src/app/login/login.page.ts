import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

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
  constructor(private storage: Storage) {
    storage.get('first').then((data) => {
      if (data === undefined) {
        storage.set('first', true);
      }
    })
    storage.get('api_base_url').then((data) => {
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
  }
}
