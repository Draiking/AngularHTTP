import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    cars = [
        {
            name: 'Ford',
            color: 'white',
            id: 1
        }
    ];
}
