import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CarsServices} from './cars.services';
import { CarslistComponent } from './carslist/carslist.component';
import { ButtonlistComponent } from './buttonlist/buttonlist.component';

@NgModule({
    declarations: [
        AppComponent,
        CarslistComponent,
        ButtonlistComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [CarsServices],
    bootstrap: [AppComponent]
})
export class AppModule {
}
