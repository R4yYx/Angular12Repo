import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {IonicStorageModule} from '@ionic/storage';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot({
            name: '97c7d062-cd7e-4b44-b0d8-16ce4c819aa8 '
        }),
        AppRoutingModule,
    ],
    providers: [
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}

