import {Component} from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {
  location: Location;

  constructor( private router: Router, location: Location,) {
    this.location = location;
  }
}
