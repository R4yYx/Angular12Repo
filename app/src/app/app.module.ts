import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import localeDE from '@angular/common/locales/de';
import localeDEExtra from '@angular/common/locales/extra/de';
import {AuthModule, BarcodeService, DokService, MenuModule, UriHttpInterceptor} from '@cos/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {DocumentViewer} from '@ionic-native/document-viewer/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {File} from '@ionic-native/file/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {Camera} from '@ionic-native/camera/ngx';

@NgModule({
    declarations: [
        AppComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        HttpClientModule,
        IonicStorageModule.forRoot({
            name: '97c7d062-cd7e-4b44-b0d8-16ce4c819aa8 '
        }),
        AuthModule.forRoot(),
        AppRoutingModule,
        MenuModule,
        ReactiveFormsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: LOCALE_ID, useValue: 'de'},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: UriHttpInterceptor, multi: true},
        File,
        FileOpener,
        DocumentViewer,
        Camera,
        FilePath,
        WebView,
        BarcodeService,
        DokService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}

registerLocaleData(localeDE, localeDEExtra);
