import { AuthInterceptor } from './../security/auth.interceptot';

import { FormsModule, ReactiveFormsModule, FormControlName } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HTTP_INTERCEPTORS} from '@angular/common/http'

import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';

import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsServices } from 'app/restaurants/restaurants.services';
import { OrderService } from 'app/order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';

import { LoginService } from './../security/login/login.service';

import { LoggedInGuard } from './../security/loggedin.guard';
@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, SnackbarComponent,
         RatingComponent, CommonModule,
         FormControlName, ReactiveFormsModule]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService,
                        RestaurantsServices,
                        OrderService,
                        NotificationService,
                        LoginService,
                        LoggedInGuard,
                        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
                        ]
        }
    }
}