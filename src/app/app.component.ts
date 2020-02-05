import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
        {
            title: 'แผนที่',
            url: '/home',
            icon: 'map'
        },
        {
            title: 'เข้าสู่ระบบ',
            url: '/login',
            icon: 'person'
        },
        {
            title: 'ลงทะเบียนผู้ใช้งาน ใหม่!!',
            url: '/member',
            icon: 'person-add'
        },
        {
            title: 'วิธีการใช้งาน',
            url: '/howto',
            icon: 'book'
        },
        {
            title: 'แสกนคิวอาร์โค้ด',
            url: '/qrcode',
            icon: 'qr-scanner'
        },
        {
            title: 'ตั้งค่า',
            url: '/setting',
            icon: 'cog'
        },
        {
            title: 'List',
            url: '/list',
            icon: 'list'
        },
        {
            title: 'ลงทะเบียนเครื่อง AED',
            url: '/add-aed',
            icon: 'add-circle'
        },
        {
            title: 'ออกจากระบบ',
            url: '/logout',
            icon: 'log-out'
        },
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: Storage
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.storage.set('api_base_url', 'https://aednodejs.yuzudigital.com').then();
        });
    }
}
