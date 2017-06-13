import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { SlidesTogglesComponent } from './slides-toggles/slides-toggles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DataEntryComponent,
    SlidesTogglesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
