import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JsonPicturesService} from '../../services/json-pictures.service';
import {NavController} from "@ionic/angular";

declare var cordova: any;
@Component({
    selector: 'app-pictures',
    templateUrl: './pictures.page.html',
    styleUrls: ['./pictures.page.scss'],
})
export class PicturesPage implements OnInit {
    constructor(public service: JsonPicturesService, public activatedRoute: ActivatedRoute,  public router: Router, public ncrl: NavController) {
        this.loadData();
    }
    dt: string;

    public items: any;
    public title: String;

    makeToast(){
        cordova.plugins.Demoplugin.showToast("Привет всем");
    }
    showDate() {
        cordova.plugins.DemoPlugin.getCurrDate((data)=>{
            this.dt = data;
        })
    }

    loadData() {
        this.activatedRoute.queryParams.subscribe(res => {
            if (res.name === undefined) {
                this.service.getData().subscribe(result => {
                    this.items = result;
                    this.title = 'Картины';
                });
            } else {
                this.service.getData().subscribe((result) => {
                    this.items = result;
                    this.items =  this.items.filter(element => element.name === res.name);
                    this.title = res.name;
                });
            }
        });
    }

    onGoToFullPage(i) {
        this.router.navigate(['/full-info'], {
            queryParams: this.items[i]
        });
    }

    ngOnInit() {
    }
}
