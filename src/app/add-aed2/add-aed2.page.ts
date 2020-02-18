import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-add-aed2',
  templateUrl: './add-aed2.page.html',
  styleUrls: ['./add-aed2.page.scss'],
})
export class AddAed2Page implements OnInit {
  machineId: number;
  machineNo: number;
  api_base_url: string;
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
  ngOnInit() {
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
  getAllMatchine() {
    this.http.get(this.api_base_url + '/getAllMachine', {})
        .subscribe((response) => {
          const responseObj = JSON.stringify(response);
          const datas = JSON.parse(responseObj);
          this.datas = datas;
          const machineId = datas.data.machineId;
          const machineNo = datas.data.machineNo;
        });
  }
  goToSuccess() {
    this.navCtrl.navigateRoot('/success-aed').then();
  }
}


