import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import {JsonAuthorService} from '../../services/json-author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.page.html',
  styleUrls: ['./author.page.scss'],
})
export class AuthorPage implements OnInit {

  public items: any = 0;
  public ITEMS_KEY = 'my-items'
  constructor(public service: JsonAuthorService,
              private storage: Storage,
              public router: Router, ) {
    this.loadData();
  }
  getData() {
    this.service.getData().subscribe(result => {
      this.items = result;
    });
  }
  saveData() {
    this.storage.set(this.ITEMS_KEY, JSON.stringify(this.items));
  }
  loadData() {
    this.storage.get(this.ITEMS_KEY).then((val) => {
      if (val != null && val !== undefined) {
        this.items = JSON.parse(val);
      }
    });
  }
  delete(i) {
    this.items.splice(i, 1);
  }
  onGoToNextPage(i) {
    this.router.navigate(['/tabs/pictures'], {
      queryParams: this.items[i]
    });
  }

  ngOnInit() {
  }

}
