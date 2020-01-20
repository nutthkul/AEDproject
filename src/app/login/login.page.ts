import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  constructor(private http: HTTP) {
  }

  clickBtn() {
    this.http.post('https://aednodejs.yuzudigital.com/login', {}, {})
        .then(data => {

        })
        .catch(error => {

        });
  }
}
