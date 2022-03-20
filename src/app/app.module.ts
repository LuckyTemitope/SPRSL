import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ResultsComponent } from './results/results.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DataService } from 'src/services/data.service';
import { TeamsComponent } from './teams/teams.component';
import { TableComponent } from './table/table.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SchedulesComponent,
    FooterComponent,
    ContactUsComponent,
    ResultsComponent,
    AboutUsComponent,
    TeamsComponent,
    TableComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
