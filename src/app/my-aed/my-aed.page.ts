import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-aed',
  templateUrl: './my-aed.page.html',
  styleUrls: ['./my-aed.page.scss'],
})

export class MyAedPage implements OnInit {
  api_base_url: string;
  machineId: number;
  addressPoint: string;
  addressDetail: string;
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
  getAllMatchine() {
    this.http.get(this.api_base_url + '/getAllMachine', {})
        .subscribe((response) => {
          const responseObj = JSON.stringify(response);
          const datas = JSON.parse(responseObj);
          const machineId = datas.data.machineId;
          const addressDetail = datas.data.addressDetail;
          const addressPoint = datas.data.addressPoint;
          const phoneNo = datas.data.phoneNo;
          const machineNo = datas.data.machineNo;
          const lat = datas.data.lat;
          const lng = datas.data.lng;
          const updateDate = datas.data.updateDate;
          const createDate = datas.data.createDate;
          console.log(datas.data);
        });
  }
}
