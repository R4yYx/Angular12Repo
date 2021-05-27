import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MangFsgModule} from '@cos/common';


@NgModule({
    imports: [
        CommonModule,
        MangFsgModule
    ],
    exports: [
        MangFsgModule
    ]
})
export class LazyHomeModule {

}
