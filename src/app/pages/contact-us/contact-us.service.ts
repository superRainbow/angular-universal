import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class ContactUsService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  sendForm(data) {
    const apiUrl = environment.apiUrl + 'sendForm';
    return this.http.post(apiUrl, data);
  }
}
