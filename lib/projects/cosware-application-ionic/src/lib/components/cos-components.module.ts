import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackButtonComponent} from './back-button/back-button.component';

@NgModule({
  declarations: [
    BackButtonComponent,
  ],
  imports: [
    CommonModule,
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
