import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { BloodbornelshComponent } from './bloodbornelsh/bloodbornelsh.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    BloodbornelshComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
