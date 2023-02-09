import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DailiesComponent } from './dailies/dailies.component';
import { WeekliesComponent } from './weeklies/weeklies.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DailiesComponent,
    WeekliesComponent,
    HorizontalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
