import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarsServices} from '../cars.services';


@Component({
    selector: 'app-buttonlist',
    templateUrl: './buttonlist.component.html',
    styleUrls: ['./buttonlist.component.sass']
})
export class ButtonlistComponent implements OnInit {


    @Output() loadCarEvent = new EventEmitter();
    @Output() addCarEvent = new EventEmitter();


    constructor(private carsService: CarsServices) {
    }

    ngOnInit() {
    }


    loadCar() {
        const myNew = 'hello';
        this.loadCarEvent.emit(myNew);
    }

    addCar() {
        this.addCarEvent.emit();
    }

    deleteCar() {
        this.carsService.deleteEvent.next(0);
    }

}
