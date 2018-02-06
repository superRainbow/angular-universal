import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ContactUsService {

  constructor(private http: HttpClient) {}

  sendForm(data) {
    return this.http.post('http://127.0.0.1:3000/sendForm', data);
  }
}
