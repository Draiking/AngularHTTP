import {Component, OnInit} from '@angular/core';
import {CarsServices} from './cars.services';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    cars = [];

    constructor(private carService: CarsServices) {

    }

    ngOnInit() {
        this.carService.getCars();
    }

}
