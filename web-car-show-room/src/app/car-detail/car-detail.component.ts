import { Component, Input, OnInit } from '@angular/core';
import { CARS } from '../../mock-cars';
import { Car } from '../cars/car';
import { CarsComponent } from '../cars/cars.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CarService } from '../../car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car!: Car;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCars();
   }
  
   getCars(): void {
    const id =+this.route.snapshot.params['id'];
    this.carService.getCar(id)
    .subscribe(car=> this.car = car);
   }
   goBack(): void{
    this.location.back();
   }
   save(): void {
    this.carService.updateCar(this.car)
      .subscribe(() => this.goBack());
  }
 }
