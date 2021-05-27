import {Directive, Injector, OnInit} from '@angular/core';


@Directive()
// Lint disabled for legacy reasons
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class CosAppComponent implements OnInit {

  protected constructor(protected injector: Injector,
                        ) {
  }

  ngOnInit() {
  }

}
