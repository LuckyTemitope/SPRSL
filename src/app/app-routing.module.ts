import { ContactUsComponent } from './contact-us/contact-us.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TableComponent } from './table/table.component';
import { FireadminComponent } from './fireadmin/fireadmin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'fixtures',
    component: SchedulesComponent
  },{
    path: 'results',
    component: ResultsComponent
  }, {
    path: 'standings',
    component: TableComponent
  },{
    path: 'about-us',
    component: AboutUsComponent
  }, {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path:'fireadmin',
    component: FireadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
