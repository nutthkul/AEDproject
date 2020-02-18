import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Language {
  langId: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'https://aednodejs.yuzudigital.com/';
  currentLanguage: Language;
  constructor(public http: HttpClient) { }

  login(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'login', param, { headers: header })
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
}
