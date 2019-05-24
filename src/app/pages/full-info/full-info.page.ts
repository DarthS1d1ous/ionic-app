import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {JsonPicturesService} from "../../services/json-pictures.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-full-info',
    templateUrl: './full-info.page.html',
    styleUrls: ['./full-info.page.scss'],
})
export class FullInfoPage implements OnInit {

    constructor(public http: HttpClient, public service: JsonPicturesService, public activatedRoute: ActivatedRoute) {
        this.loadData();
    }

    public item: any;

    loadData() {
        this.activatedRoute.queryParams.subscribe(res => {
                this.item = res;
        });
}

ngOnInit()
{
}

}
