import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavController} from '@ionic/angular';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-full-info',
  templateUrl: './full-info.page.html',
  styleUrls: ['./full-info.page.scss'],
})
export class FullInfoPage implements OnInit {

  constructor(public http: HttpClient) {
    this.loadData();
  }
  public image: String;
  public title: String;
  public museum: String;
  public author: String;
  public text: String;
  public date:String = '';
  public id: String;

  loadData() {
    let urlCurrentPage = document.URL.split("/");
    let id = Number(urlCurrentPage.slice(-1))-1;
    let data: Observable<any>;
    data = this.http.get('../../assets/pictures.json');

    data.subscribe(result => {
      let item = result[id];

      this.title = item["title"];
      this.image = item["image"];
      this.museum = item["museum"];
      this.author = item["author"];
      this.text = item["text"];
      this.date = item["date"];
      this.id = item["id"];

    });
  }

  ngOnInit() {
  }

}
