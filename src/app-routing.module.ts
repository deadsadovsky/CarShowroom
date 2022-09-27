import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from './app/cars/cars.component'
import { DashboardComponent }   from './app/dashboard/dashboard.component';
import {CarDetailComponent} from './app/car-detail/car-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'cars', component: CarsComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CarDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule] 

})

export class AppRoutingModule { }
