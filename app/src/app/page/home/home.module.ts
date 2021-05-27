import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {CosComponentsModule} from "@cos/common";



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
        [
          {
            path: '',
            component: HomeComponent,
          }
        ]),
    IonicModule,
    CosComponentsModule,
  ]
})
export class HomeModule { }
