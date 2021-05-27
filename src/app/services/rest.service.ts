import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Language {
  langId: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'https://aed.defence-innovation.com:9993';
  currentLanguage: Language;
  constructor(public http: HttpClient) { }

  login(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.get(this.apiUrl + '/user/login' + '/' + param.mobileNo + '/' + param.password)
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getDeviceAll() {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.get(this.apiUrl + '/device/getDeviceAll')
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  register(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + '/user/registerUser', param, { headers: { Authorization: 'Bearer Zm9vOmJhcg==' } })
        .subscribe(res => {
          console.log(res);
          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  addData(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'registerMachine', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }
  getUserById(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.get(this.apiUrl + '/user/getUser/' + param.userId, { headers: header })
        .subscribe(res => {
          // console.log(param);
          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  updateUser(param: any) {
    console.log(param);
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');
      this.http.put(this.apiUrl + '/user/updateUser/' + param.userId, param, { headers: { Authorization: 'Bearer Zm9vOmJhcg==' } })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  createEvent(userId, latLng) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + '/event/createEvent/' + userId + '/' + latLng, {})
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  addDevice(param) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + '/device/registerDevice', param)
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  // getDeviceAll(param: any) {
  //   return new Promise((resolve, reject) => {
  //     const header = new HttpHeaders();
  //     header.append('Content-type', 'json/data; charset=utf-8');
  //
  //     this.http.get(this.apiUrl + '/user/getUser/' + param.userId, { headers: {Authorization: 'Bearer Zm9vOmJhcg=='}})
  //         .subscribe(res => {
  //
  //           // this.setUserLogin(res);
  //           resolve(res);
  //         }, (err) => {
  //           reject(err);
  //         });
  //   });
  //
  // }


}
