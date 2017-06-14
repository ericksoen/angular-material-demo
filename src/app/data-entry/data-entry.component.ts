import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MdDialog } from '@angular/material';
import { DialogOverviewExampleDialog } from '../dialog.component';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit {
  selectedTime: string;
  selectedStylist: string;

  stylists = [
    'Ariana',
    'Beyonce',
    'Coolio'
  ];

  times = [
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM'
  ];

  filteredTimes: any;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }
  
  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog);
  }

}
