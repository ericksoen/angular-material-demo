import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { SlidesTogglesComponent } from './slides-toggles/slides-toggles.component';
import { DialogOverviewExampleDialog } from './dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent,
    SlidesTogglesComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ DialogOverviewExampleDialog, ]
})
export class AppModule { }
