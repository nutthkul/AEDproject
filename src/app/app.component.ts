import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

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
            url: '/register',
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
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
