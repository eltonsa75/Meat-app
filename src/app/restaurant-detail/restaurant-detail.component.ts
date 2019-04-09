import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { RestaurantsServices } from './../restaurants/restaurants.services';

import { Restaurant } from './../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantsServices: RestaurantsServices,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsServices.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant);

  }

}
