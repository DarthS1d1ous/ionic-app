import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FullInfoPage } from './full-info.page';
import {LabelChangePipe} from '../../pipes/label-change.pipe';

const routes: Routes = [
  {
    path: '',
    component: FullInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FullInfoPage, LabelChangePipe]
})
export class FullInfoPageModule {}
