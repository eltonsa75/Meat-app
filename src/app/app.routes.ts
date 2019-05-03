
import { LoginComponent } from './security/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { LoggedInGuard } from './security/loggedin.guard';


import { Routes, CanLoad } from '@angular/router';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

export const ROUTES: Routes = [

    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]},
    {path: 'order', loadChildren: './order/order.module#OrderModule',
    canLoad: [LoggedInGuard]},
    {path: 'order-summary', component: OrderSumaryComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: '**', component: NotFoundComponent}
]

