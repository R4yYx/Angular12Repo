import {Component, Injector} from '@angular/core';
import {CosAppComponent, MangelAppTypes, MangService} from '@cos/common';
import {environment} from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent extends CosAppComponent {

    constructor(protected injector: Injector, private fsgService: MangService) {
        super(injector, environment);
        this.fsgService.appType = MangelAppTypes.mangelMelden;
    }

    getTitle() {
        return 'obmang.mangName';
    }

    getAppPages() {
        return [
            {
                title: 'obmang.mangName',
                url: '/home',
                icon: 'home'
            }
        ];
    }

}
