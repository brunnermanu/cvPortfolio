import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  buttonName: string;

  @Input()
  blue: boolean;

  @Input()
  white: boolean;

  constructor() { }
}
