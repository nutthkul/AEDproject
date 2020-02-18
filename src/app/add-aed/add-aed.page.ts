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
  addressDetail: string;
  addressPoint: string;
  phoneNo: string;
  machineNo: string;
  lat: string;
  lng: string;
  imgUrl: string;
  api_base_url: string;

  constructor(
    private storage: Storage,
    private http: HttpClient,
    public rest: RestService,
    public navCtrl: NavController
  ) {
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
    //     } else {
    //       console.log('add failed');
    //     }
    //     // console.log(response);
    //   });

    const param = {
      addressDetail: this.addressDetail,
      addressPoint: this.addressPoint,
      phoneNo: this.phoneNo,
      machineNo: this.machineNo,
      lat: this.lat,
      lng: this.lng,
      imgUrl: this.imgUrl
    };

    this.rest.addData(param).then((result: any) => {
      console.log(result);
      if (result.response_code === '0000') {
        alert(result.response_description);
        console.log('add success');
      } else {
        alert(result.response_description);
        console.log('add failed');
      }
    });
  }
  goToStep2() {
    this.navCtrl.navigateRoot('/add-aed2').then();
  }
}
