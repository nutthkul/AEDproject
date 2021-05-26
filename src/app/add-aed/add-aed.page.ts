import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { IonicStepperModule } from 'ionic-stepper';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { RestService } from '../services/rest.service';
declare var google;
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-add-aed',
  templateUrl: './add-aed.page.html',
  styleUrls: ['./add-aed.page.scss'],
})

export class AddAedPage implements OnInit {

  @ViewChild('map', { static: false }) mapContainer: ElementRef;
  map: any;
  markers: any;

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
  subDistrictCode: number;
  districtCode: number;
  provinceCode: number;

  // api_base_url: string;
  constructor(
    private storage: Storage,
    private http: HttpClient, public navCtrl: NavController, public rest: RestService,
    private geolocation: Geolocation) {

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

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    console.log('load');
    const that = this;
    // หาที่อยู่ ปัจจุบัน
    this.geolocation.getCurrentPosition().then((resp) => {

      // set lat lng
      const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      const mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
      // this.addMarkersToMap(resp.coords.latitude, resp.coords.longitude);

      // tslint:disable-next-line:only-arrow-functions
      this.map.addListener('click', function (e) {
        console.log(e);
        console.log(e.latLng.lat() + ' ' + e.latLng.lng());
        that.latitude = e.latLng.lat();
        that.longitude = e.latLng.lng();
        // if (this.marker && this.marker.setMap) {
        //   this.marker.setMap(null);
        // }
        // this.marker = new google.maps.Marker({
        //   position: latLng,
        //   map: this.map
        // });

        // this.marker.setMap(this.map);
        // this.markers.setMap(null);
        that.addMarkersToMap(e.latLng);
        // marker
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  addMarkersToMap(latLng) {
    // this.removeMarker();
    // this.markers = [];

    this.markers = new google.maps.Marker({
      position: latLng,
      map: this.map
    });
    // this.markers.setMap(null);
    // marker.setMap(this.map);

    // this.markers.push(marker);
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
      longitude: this.longitude,
      subDistrictCode: this.subDistrictCode,
      districtCode: this.districtCode,
      provinceCode: this.provinceCode
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
