import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Car} from './cars/car'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
createDb(){
  const cars = [
    {id:1, brand: "Mercedes-Benz", model:"CLA 200 sport", color:"Белый", price:5298000.00},
{id:2, brand: "Mercedes-Benz", model:"C 200 4MATIC", color:"Белый", price:7842000.00},
{id:3, brand: "Mercedes-Benz", model:"AMG GT R", color:"Сервый матовый", price:57298000.00},
{id:4, brand: "Mercedes-Benz", model:"CLS 53 AMG 4MATIC", color:"Синий", price:16278000.00},
{id:5, brand: "Mercedes-Benz", model:"G 63 AMG", color:"Черный", price:43688000.00},
{id:6, brand: "Mercedes-Benz", model:"E 63 AMG S 4MATIC", color:"Черный", price:20707000.00},
{id:7, brand: "Mercedes-Benz", model:"E 200 4MATIC Coupe", color:"Синий", price:12498000.00},
{id:8, brand: "Mercedes-Benz", model:"GLS 400 d 4MATIC", color:"Черный", price:20481000.00},
{id:9, brand: "Mercedes-Maybach", model:"GLS 600 4MATIC", color:"Черный", price:36366000.00},
{id:10, brand: "Mercedes-Maybach", model:"S 580 4MATIC", color:"Белый", price:43207000.00},
];
  return {cars};
}
genId(cars: Car[]): number{
  return cars.length > 0 ? Math.max(...cars.map(car=>car.id)) + 1 :11;
}
  constructor() { }
}
