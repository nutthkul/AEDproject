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
