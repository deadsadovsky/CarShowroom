import { Component, OnInit } from '@angular/core';
import { Car } from '../cars/car';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cars!: Car[];
 

  constructor(private carService: CarService) { }
 
  ngOnInit() {
   this.getCars();
  }
 
  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars.slice(-4));
  }
}