import { Component, OnInit } from '@angular/core';
import {
    ToastController,
    Platform,
    LoadingController
} from '@ionic/angular';
import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    Marker,
    GoogleMapsAnimation,
    MyLocation
} from '@ionic-native/google-maps';
import { Storage } from '@ionic/storage';
import { RestService } from '../services/rest.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    map: GoogleMap;
    loading: any;
    AEDLocation: any;
    SOS = false;
    SOSHelp = false;
    count = 1;
    role = 1;
    first = true;
    step = 1;

    constructor(
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        private platform: Platform,
        public rest: RestService,
        public storage: Storage) {
        if (this.role !== 2) {
            storage.get('first').then((data) => {
                if (data === undefined) {
                    storage.set('first', true);
                }
                this.first = data === true;
                // storage.set('first', false);
            });
        } else {
            this.first = false;
        }
    }

    async ngOnInit() {
        // Since ngOnInit() is executed before `deviceready` event,
        // you have to wait the event.
        await this.platform.ready();
        await this.loadMap();
        await this.start();

        // this.getAllDevices();
    }

    getAllDevices() {
        console.log('get device');
        this.rest.getDeviceAll().then((result: any) => {
            console.log(result);
            result.forEach(device => {

                // var myLatlng = new this.map.

                const marker: Marker = this.map.addMarkerSync({
                    title: device.deviceName,
                    snippet: device.deviceMark,
                    position: { lat: device.latitude, lng: device.longitude },
                    animation: GoogleMapsAnimation.BOUNCE
                });
            });
        });
    }

    loadMap() {
        this.map = GoogleMaps.create('map_canvas', {
            camera: {
                target: {
                    lat: 43.0741704,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            }
        });

    }

    async start() {
        this.map.clear();

        this.loading = await this.loadingCtrl.create({
            message: 'Please wait...'
        });
        await this.loading.present();
        const that = this;
        // Get the location of you
        this.map.getMyLocation().then((location: MyLocation) => {
            this.loading.dismiss();
            console.log(JSON.stringify(location, null, 2));

            // Move the map camera to the location with animation
            this.map.animateCamera({
                target: location.latLng,
                zoom: 17,
                tilt: 30
            });
            // add a marker
            const marker: Marker = this.map.addMarkerSync({
                title: 'AED จุดที่ 1',
                snippet: 'โรงพยาบาลมหาราช',
                position: location.latLng,
                animation: GoogleMapsAnimation.BOUNCE
            });

            that.getAllDevices();

            // show the infoWindow
            marker.showInfoWindow();

            // If clicked it, display the alert
            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((event) => {
                // this.showToast('clicked!');
                // console.log(event.latLng);
                // console.log(event.latLng.lat);
                // window.open('https://maps.google.com/?q=13.7551,100.4984', '_system');
            });
        })
            .catch(err => {
                this.loading.dismiss();
                this.showToast(err.error_message);
            });
    }

    sos() {
        if (this.count === 3) {
            this.SOS = !this.SOS;
            this.count++;
        } else if (this.count === 4) {
            this.SOS = !this.SOS;
            this.count = 1;
        } else {
            this.count++;
        }
        this.AEDLocation = 'แจ้งเตือนไปยังผู้ช่วยแล้ว!!';
    }

    myLocation() {
        this.map.getMyLocation().then((location: MyLocation) => {
            this.loading.dismiss();
            console.log(JSON.stringify(location, null, 2));

            // Move the map camera to the location with animation
            this.map.animateCamera({
                target: location.latLng,
                zoom: 17,
                tilt: 30
            });
            // add a marker
            const marker: Marker = this.map.addMarkerSync({
                title: 'AED จุดที่ 1',
                snippet: 'โรงพยาบาลมหาราช',
                position: location.latLng,
                animation: GoogleMapsAnimation.BOUNCE
            });

            // const pos = {
            //     lat: 13.7551,
            //     lng: 100.4984
            //   };
            // const marker2: Marker = this.map.addMarkerSync({
            //     title: 'AED จุดที่ 2',
            //     snippet: 'โรงพยาบาลมหาราช',
            //     position: pos,
            //     animation: GoogleMapsAnimation.BOUNCE
            // });

            // show the infoWindow
            marker.showInfoWindow();

            // If clicked it, display the alert
            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((event) => {
                // this.showToast('clicked!');
                // window.open('https://maps.google.com/?q=' + event.latLng.lat() + ',' + event.latLng.lng(), '_system');
            });
        })
            .catch(err => {
                this.loading.dismiss();
                this.showToast(err.error_message);
            });
    }

    async showToast(message: string) {
        const toast = await this.toastCtrl.create({
            message,
            duration: 2000,
            position: 'middle'
        });

        toast.present();
    }

    nextStep() {
        this.step += 1;
        if (this.step === 3) {
            this.step = undefined;
        }
    }

    notificationPop() {
        this.SOSHelp = true;
        this.step = 3;
    }

    help() {
        window.open('https://maps.google.com/?q=13.7551,100.4984', '_system');
        this.SOSHelp = false;
        this.step = 1;
    }

}
