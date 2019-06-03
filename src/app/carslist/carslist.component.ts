import {Component, Input, OnInit} from '@angular/core';
import {IData} from '../db.models';
import {CarsServices} from '../cars.services';

@Component({
    selector: 'app-carslist',
    templateUrl: './carslist.component.html',
    styleUrls: ['./carslist.component.scss']
})
export class CarslistComponent implements OnInit {

    colors = [
        'red',
        'blue',
        'green',
        'pink',
        'yellow',
        'grey',
    ];

    @Input() carslist: IData[];

    constructor(private carsService: CarsServices) {
    }

    ngOnInit() {
    }

    delete(i: number) {
        this.carsService.deleteEvent.next(i);
    }

    deleteByObject(car) {
        this.carsService.deleteByObject.next(car);
    }


    getRandColor() {
        const num = Math.round(Math.random() * (this.colors.length - 1));
        return this.colors[num];
    }

    setNewColor(car: IData) {
        this.carsService.changeColor(car.id, this.getRandColor()).subscribe((data) => {
           console.log(data);
           car.color = data.color;
        });
    }





}
