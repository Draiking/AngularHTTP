import {Component, OnInit} from '@angular/core';
import {CarsServices} from './cars.services';
import {IData} from './db.module';
import {resolve} from 'url';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   cars: IData;
   carName: string = '';

    constructor(private carService: CarsServices) {

    }

    ngOnInit() {
    }

    loadCar() {
        this.carService.getCars().then((cars: IData) => {
                this.cars = cars;
            });
    }

   addCar() {
        this.carService.addCar(this.carName).subscribe((json) => {
            this.cars.push(json);
        });
        this.carName = '';
    }

}
