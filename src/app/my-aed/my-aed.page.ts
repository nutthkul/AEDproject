import { Component, OnInit } from '@angular/core';
import {Events, NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';
import { RestService } from '../services/rest.service';
import {forEach} from '@angular-devkit/schematics';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-aed',
  templateUrl: './my-aed.page.html',
  styleUrls: ['./my-aed.page.scss'],
})

export class MyAedPage implements OnInit {
  api_base_url: string;
  userId: number;
  addressPoint: string;
  addressDetail: string;
  updateDate: string;
  datas: any;
  // tslint:disable-next-line:max-line-length
  constructor(
      private storage: Storage,
      private http: HttpClient,
      public navCtrl: NavController,
      public rest: RestService, public events: Events,
      private router: Router, ) {
    this.storage.get('api_base_url').then((data) => {
      this.api_base_url = data;
      this.getAllMatchine();
    });
  }
  async setData(key: string, value: string) {
    await this.storage.set(key, value).then(() => true);
  }

  async getData(key: string) {
    await this.storage.get(key).then((data) => data);
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
  ngOnInit() {
  }
  goToAddAed() {
    this.navCtrl.navigateRoot('/add-aed').then();
  }
  async getAllMatchine() {
    this.http.get(this.api_base_url + '/getAllMachine', {});
    await this.http.get('https://aed.defence-innovation.com:8443/device/getDeviceAll', {headers: {Authorization: 'Bearer Zm9vOmJhcg=='}})
        .subscribe((response) => {
          const responseObj = JSON.stringify(response);
          const datas = JSON.parse(responseObj);
          this.datas = datas;
          console.log(datas);

        });
  }
  // getUserAll() {
  //   const param = {
  //     userId: this.userId,
  //   };
  //
  //   this.rest.getUserAll(param).then((result: any) => {
  //     console.log(result);
  //     if (result.status !== '500') {
  //       // console.log(result.data.result[0]);
  //       this.storage.set('user', result).then(user => {
  //         this.events.publish('user:login');
  //       });
  //     } else {
  //       alert('ไม่มีข้อมูล');
  //     }
  //   });
  //   // this.goToHome();
  // }
}
