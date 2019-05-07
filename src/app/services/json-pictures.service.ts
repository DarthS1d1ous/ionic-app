import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonPicturesService {

  url = "./assets/pictures.json";

  constructor(public http: HttpClient) {}

  getData() {
    return this.http.get(this.url);
  }
}
