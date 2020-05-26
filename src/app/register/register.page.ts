import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
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

  constructor(
      public navCtrl: NavController,
      private storage: Storage,
      private router: Router,
      public rest: RestService,
      public events: Events,
      ) {
  }
register() {
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
  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
  goToStep2() {
    this.navCtrl.navigateRoot('/member2').then();
  }

  ngOnInit() {
  }

}
