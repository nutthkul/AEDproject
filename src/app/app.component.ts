import { Component } from '@angular/core';

import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPagesBeforeLogin = [
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
            title: 'ลงทะเบียนเครื่อง AED',
            url: '/add-aed',
            icon: 'ios-add-circle'
        },
    ];

    public appPagesAfterLogin = [
        {
            title: 'แผนที่',
            url: '/home',
            icon: 'map'
        },
        {
            title: 'แก้ไขข้อมูลส่วนตัว',
            url: '/member',
            icon: 'contact'
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
            title: 'เครื่องAEDของฉัน',
            url: '/my-aed',
            icon: 'list'
        },
        {
            title: 'ลงทะเบียนเครื่อง AED',
            url: '/add-aed',
            icon: 'ios-add-circle'
        },
        {
            title: 'ออกจากระบบ',
            url: 'logout',
            icon: 'log-out'
        }
    ];

    public appPages = [];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: Storage,
        public events: Events
    ) {
        this.initializeApp();
        events.subscribe('user:login', () => {
            // user and time are the same arguments passed in `events.publish(user, time)`
            this.storage.get('user').then(user => {
                if (user) {
                    this.appPages = this.appPagesAfterLogin;
                }
            });
        });

    }

    initializeApp() {
        // this.storage.remove('user');
        // this.storage.remove('userId');
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.storage.get('user').then(user => {
                if (user) {
                    this.appPages = this.appPagesAfterLogin;
                } else {
                    this.appPages = this.appPagesBeforeLogin;
                }
            });
        });
    }

    logout() {
        this.appPages = this.appPagesBeforeLogin;
    }
}
