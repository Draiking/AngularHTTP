import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IData} from './db.models';
import {Observable, Subject} from 'rxjs';


@Injectable()

export class CarsServices {

    deleteEvent = new Subject<number>();
    deleteByObject = new Subject<IData>();


    constructor(private http: HttpClient) {
    }

    getCars(): Observable<IData[]> {
        return this.http.get<any>('http://localhost:3000/cars');
    }

    async addCar(carName: string): Promise<any> {
        const data = {
            name: carName,
            color: 'blue'
        };
        return this.http.post('http://localhost:3000/cars', data).toPromise();
    }

    changeColor(id: number, color: string) {
        return this.http.put<any>(`http://localhost:3000/cars/${id}`, {color});
    }

}