import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { States } from './states';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor() { }

}
