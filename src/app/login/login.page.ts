import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  constructor() {}
  clickBtn() {
    let jsonObj = {
      name: 'Nutthkul',
      lastname: 'kulkritt',
      age: 22
    };
    console.log(jsonObj.name + ' ' + jsonObj.lastname +
        ' ' + jsonObj.age);

  }
}
