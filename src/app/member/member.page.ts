import { Component, OnInit } from '@angular/core';
import {Events, NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {RestService} from '../services/rest.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  userType: string;
  userPic: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
  idNum: number;
  mobileNo: number;
  bloodGroup: string;
  weight: number;
  height: number;
  address: any;
  subDistrict: any;
  district: any;
  province: any;
  zipCode: number;
  drugAllergy: any;
  congenitalDisease: any;
  hospital: any;
  contactName: string;
  contactPhone: number;
  contactRelation: string;
  registDate: any;
  userStatus: string;

  api_base_url: string;
  userId: number;
  datas: any;
  constructor(
      private storage: Storage,
      private http: HttpClient,
      public navCtrl: NavController,
      public rest: RestService, public events: Events,
      private router: Router, ) {
    this.storage.get('api_base_url').then((data) => {
      this.api_base_url = data;
      this.getUserById();
    });
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
  goToStep2() {
    this.navCtrl.navigateRoot('/member2').then();
  }
  editProfile() {
    const param = {
      userType: this.userType,
      userPic: this.userPic,
      password: this.password,
      firstName: this. firstName,
      lastName: this.lastName,
      gender: this.gender,
      birthday: this.birthday,
      idNum: this.idNum,
      mobileNo: this.mobileNo,
      bloodGroup: this.bloodGroup,
      weight: this.weight,
      height:  this.height,
      address: this.address,
      subDistrict: this.subDistrict,
      district: this.district,
      province: this.province,
      zipCode: this.zipCode,
      drugAllergy: this.drugAllergy,
      congenitalDisease: this.congenitalDisease,
      hospital: this.hospital,
      contactName: this.contactName,
      contactPhone: this.contactPhone,
      contactRelation: this.contactRelation,
      registDate: this.registDate,
      userStatus: this.userStatus
    };
    this.rest.register(param).then((result: any) => {
      console.log(param);
      // if (result.userType === 'P') {
      //   // console.log(result.data.result[0]);
      //   this.storage.set('userId', result).then(userId => {
      //     this.events.publish('user:login');
      //   });
      //   // this.router.navigate(['/home']);
      // } else {
      //   alert(result.response_description);
      // }
    });
    // this.goToHome();

  }
  ngOnInit() {
  }
  async getUserById() {
    // this.http.get(this.api_base_url + '/user/getUser/', {});
    await this.http.get('http://111.223.48.208:8080/user/getUser/1', {headers: {Authorization: 'Bearer Zm9vOmJhcg=='}})
        .subscribe((response) => {
          const responseObj = JSON.stringify(response);
          const datas = JSON.parse(responseObj);
          this.datas = datas;
          console.log(datas);
        });
  }
}
