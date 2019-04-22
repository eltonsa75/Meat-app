import { RestaurantsServices } from './restaurants.services';
import { Component, OnInit } from '@angular/core';


import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

 

  restaurants: Restaurant[]

  constructor(private RestaurantsServices: RestaurantsServices) { }

  ngOnInit() {
    this.RestaurantsServices.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
