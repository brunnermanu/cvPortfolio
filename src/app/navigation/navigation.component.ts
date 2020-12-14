import {Component, HostListener, OnInit} from '@angular/core';
import { HamburgerToggleDirective } from './hamburger-toggle.directive';
import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({
        height: '*',
        visibility: AUTO_STYLE
      })),
      state('true', style({
        height: '0',
        visibility: 'hidden'
      })),
      transition('false => true', animate('500ms ease-in')),
      transition('true => false', animate('500ms ease-out'))
    ])
  ]
})

export class NavigationComponent implements OnInit {
  collapse = true;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  toggleCollapse(): void {
    this.collapse = !this.collapse;
  }

}
