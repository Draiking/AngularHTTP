import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IData} from './db.module';



@Injectable()

export class CarsServices {

    myData: IData;


    constructor(private http: HttpClient) {
    }

    async getCars(): Promise<IData> {
        this.myData = await this.http.get<IData>('http://localhost:3000/cars').toPromise();
        return this.myData;

    }

    addCar(carName: string) {
        const data = {
            name: carName,
            color: 'blue'
        };
        return this.http.post('http://localhost:3000/cars', data)
            ;
    }
}