import { Injectable } from '@angular/core';
import { Car } from './app/cars/car';
import { CARS } from './mock-cars';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './app//message.service';
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsUrl = "api/cars";
  constructor( private http: HttpClient, private messageService: MessageService) { }
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
      .pipe(
        tap(_=>this.log('fetched cars')),
        catchError(this.handleError<Car[]>('getCars',[]))
      );
  }
  getCar(id: number): Observable<Car> {
    const url = '${this.carsUrl}/${id}';
    return this.http.get<Car>(url).pipe(
      tap(_=>this.log('fetched car id=${id}')),
      catchError(this.handleError<Car>('getCar id=${id}'))
    );
  }
  
  updateCar (car: Car): Observable<any>
  {
return this.http.put(this.carsUrl, car, httpOptions).pipe(
  tap(_=>this.log('update car id=${car.id}')),
  catchError(this.handleError<any>('updateCar'))
);
  }

  

  private handleError<T>(operation='operation', result?: T){
    
    return (error: any): Observable<T> => {
    
      console.error(error);
    
      this.log('${operation} failed: ${error.message}');

        return of (result as T)
}

  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
