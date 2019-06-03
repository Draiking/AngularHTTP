import {Component, OnInit} from '@angular/core';
import {CarsServices} from './cars.services';
import {IData} from './db.models';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    cars: IData[] = [];
    carName: string = '';



    constructor(private carService: CarsServices) {
        this.carService.deleteEvent.subscribe((value: number) => {
            this.delete(value);
        });
        this.carService.deleteByObject.subscribe((car) => {
            this.deleteCar(car);
        });
    }

    ngOnInit() {
    }

    loadCar(event) {
        this.carService.getCars().subscribe((cars: IData[]) => {
            this.cars = cars;
            console.log(this.cars);
            alert(`${event} список загружен`);
            this.loadStorage();
        });
    }

    loadStorage() {
        const myCar = JSON.stringify(this.cars);
        localStorage.setItem('cars', myCar);
    }

    getFromStorage() {
        const listCar = localStorage.getItem('cars');
        const listCarObject = JSON.parse(listCar);
        console.log(listCarObject);
    }

    removeStorage() {
        localStorage.removeItem('cars');
    }

    addCar() {
        this.carService.addCar(this.carName).then((car: IData) => {
            this.cars.push(car);
        });
        this.carName = '';
        this.getFromStorage();
    }

    delete(num: number) {
        console.log(num);
        this.cars.splice(num, 1);
        this.removeStorage();
    }

    deleteCar(car) {
        this.cars.forEach((c, index) => {
            if (c.id === car.id) {
                this.cars.splice(index, 1);
            }
        });
    }






}
