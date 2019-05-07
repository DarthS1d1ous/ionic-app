import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'pictures',
                children: [
                    {
                        path: '',
                        loadChildren: '../pictures/pictures.module#PicturesPageModule'
                    }
                ]
            },
            {
                path: 'author',
                children: [
                    {
                        path: '',
                        loadChildren: '../author/author.module#AuthorPageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/pictures',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
