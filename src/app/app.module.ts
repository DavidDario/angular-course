import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule,NgFor } from '@angular/common';

import { AppComponent } from './app.component';

import { WorkComponent } from './work/work.component';
import { CounterModule } from './counter/components/counter.module';
import { herolist } from './heroes/herolist.module';
import { MainPageComponent } from './dbz/pages/main-page.component';
import { DBZModule } from './dbz/dbz.module';



@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CounterModule,
    herolist,
    DBZModule
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
