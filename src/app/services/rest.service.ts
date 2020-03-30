import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Language {
  langId: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'http://111.223.48.208:8080';
  currentLanguage: Language;
  constructor(public http: HttpClient) { }

  login(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.get(this.apiUrl + '/user/login' + '/' + param.mobileNo + '/' + param.password )
        .subscribe(res => {

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
  getUserAll(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.get(this.apiUrl + '/user/getUserAll')
          .subscribe(res => {

            // this.setUserLogin(res);
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

  }


}
