import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DailiesComponent } from './dailies/dailies.component';
import { WeekliesComponent } from './weeklies/weeklies.component';
import { HorizontalComponent } from './horizontal/horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    DailiesComponent,
    WeekliesComponent,
    HorizontalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
