import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { IonicStepperModule } from 'ionic-stepper';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-add-aed',
  templateUrl: './add-aed.page.html',
  styleUrls: ['./add-aed.page.scss'],
})

export class AddAedPage implements OnInit {
  deviceName: string;
  deviceLocationName: string;
  deviceContact: string;
  deviceDesc: string;
  deviceMark: string;
  devicePic: string;
  deviceEui: string;
  deviceUuid: string;
  latitude: number;
  longitude: number;

  // api_base_url: string;
  constructor(private storage: Storage, private http: HttpClient, public navCtrl: NavController, public rest: RestService) {

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

  addData() {
    const param = {
      deviceName: this.deviceName,
      deviceLocationName: this.deviceLocationName,
      deviceContact: this.deviceContact,
      deviceDesc: this.deviceDesc,
      deviceMark: this.deviceMark,
      devicePic: this.devicePic,
      deviceEui: this.deviceEui,
      deviceUuid: this.deviceUuid,
      latitude: this.latitude,
      longitude: this.longitude
    };
    this.rest.addDevice(param).then((result: any) => {
      console.log(param);
      this.navCtrl.navigateRoot('/add-aed2').then();
    });
    // this.http.post(this.api_base_url + '/registerMachine', {
    //   addressDetail: this.addressDetail,
    //   addressPoint: this.addressPoint,
    //   phoneNo: this.phoneNo,
    //   machineNo: this.machineNo,
    //   lat: this.lat,
    //   lng: this.lng,
    //   imgUrl: this.imgUrl
    // })
    //   .subscribe((response) => {
    //     const responseObj = JSON.stringify(response);
    //     const datas = JSON.parse(responseObj);
    //     const status = datas.response_code;
    //     if (status === '0000') {
    //       console.log('add success');
    //       this.navCtrl.navigateRoot('/add-aed2').then();
    //     } else {
    //       console.log('add failed');
    //     }
    //     // console.log(response);
    //   });
  }
  goToStep2() {
    this.navCtrl.navigateRoot('/add-aed2').then();
  }
}
