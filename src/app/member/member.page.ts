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
  api_base_url: string;
  userId: number;
  userType: string;
  userPic: string;
  firstName: string;
  lastName: string;
  gender: string;
  birthday: number;
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
  datas: any;
  constructor(
      private storage: Storage,
      private http: HttpClient,
      public navCtrl: NavController,
      public rest: RestService, public events: Events,
      private router: Router, ) {
    this.storage.get('userId').then((data) => {
      this.userId = data;
      this.getUserById();
    });
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
  getUserById() {
    const param = {
      userType: this.userType,
      userPic: this.userPic,
      // password: this.password,
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
    this.rest.getUserById(this.userId).then((result: any) => {
      // console.log(result);
      const responseObj = JSON.stringify(result);
      const datas = JSON.parse(responseObj);
      this.datas = datas;
    });
  }
  updateUser() {
      const param = {
        userId: this.userId,
        userType: this.userType,
        userPic: this.userPic,
        // password: this.password,
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
      this.rest.updateUser(param).then((result: any) => {
        this.navCtrl.navigateRoot('/member2').then();
       });
  }
  ngOnInit() {
  }
  // async getUserById() {
  //   // this.http.get(this.api_base_url + '/user/getUser/', {});
  //   // console.log(this.storage.get('userId'));
  //   // tslint:disable-next-line:max-line-length
  //   await this.http.get('https://aed.defence-innovation.com:8443/user/getUser/' + this.storage.get('userId'))
  //       .subscribe((response) => {
  //         const responseObj = JSON.stringify(response);
  //         const datas = JSON.parse(responseObj);
  //         this.datas = datas;
  //         console.log(datas);
  //       });
  // }
}


