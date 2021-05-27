import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyIonicModule} from '@ngx-formly/ionic';
import {BackButtonComponent} from './back-button/back-button.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ReactiveComponentModule} from "@ngrx/component";

@NgModule({
  declarations: [
    BackButtonComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    FormlyIonicModule,
    ScrollingModule,
    ReactiveComponentModule,
  ],
  exports: [
    BackButtonComponent,
  ],
  entryComponents: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CosComponentsModule {
}
