import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonPicturesService {

  url = "http://hp-api.herokuapp.com/api/characters";

  constructor(public http: HttpClient) {}

  getData() {
    return this.http.get(this.url);
  }
}
