import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';
import {forEach} from '@angular-devkit/schematics';

@Component({
  selector: 'app-my-aed',
  templateUrl: './my-aed.page.html',
  styleUrls: ['./my-aed.page.scss'],
})

export class MyAedPage implements OnInit {
  api_base_url: string;
  deviceId: number;
  machineNo: number;
  addressPoint: string;
  addressDetail: string;
  updateDate: string;
  datas: any;
  constructor(private storage: Storage, private http: HttpClient, public navCtrl: NavController) {
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
    // this.http.get(this.api_base_url + '/getAllMachine', {})
      await this.http.get('http://111.223.48.208:8080/device/getDeviceAll', {headers: {Authorization: 'Bearer Zm9vOmJhcg=='}})
        .subscribe((response) => {
          const responseObj = JSON.stringify(response);
          const datas = JSON.parse(responseObj);
          this.datas = datas;
          console.log(datas);
        });
  }
}
