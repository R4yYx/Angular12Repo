import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cos-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  get text(): string {
    return this._text;
  }

  @Input()
  set text(value: string) {
    this._text = value;
  }

  private _text = 'general.back';

  constructor() {

  }

  ngOnInit(): void {
  }
}
