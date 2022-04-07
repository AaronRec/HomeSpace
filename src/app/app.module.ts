import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {SiteComponent} from './site/site.component';
import {BackgroundComponent} from './background/background.component';



@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
