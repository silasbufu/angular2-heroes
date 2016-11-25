import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { YoutubeListComponent } from './youtube-list/youtube-list.component';
import { TechsComponent } from './techs/techs.component'
import { TechComponent } from './techs/tech.component'

import { AppRoutingModule } from './routing/app-routing.module';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    InfiniteScrollModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    YoutubeListComponent,
    TechsComponent,
    TechComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}