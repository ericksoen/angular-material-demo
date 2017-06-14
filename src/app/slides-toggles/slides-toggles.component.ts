import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-slides-toggles',
  templateUrl: './slides-toggles.component.html',
  styleUrls: ['./slides-toggles.component.scss']
})
export class SlidesTogglesComponent implements OnInit {

  constructor(public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  openPlaySnackBar() {
    this.snackBar.open("Now listening to Revolver", "OK", {
      duration: 2000,
    });
  }

  openPauseSnackBar() {
    this.snackBar.open("Paused", "OK", {
      duration: 2000,
    });
  }

  openSkipSnackBar() {
    this.snackBar.open("Sorry, you only get Revolver", "BOOYAH!", {
      duration: 2000,
    });
  }
}
