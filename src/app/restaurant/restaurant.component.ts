import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [RestaurantService]
})
export class RestaurantComponent implements OnInit {
  restaurants: any[];
  city: String;
  constructor(private service: RestaurantService) { }

  ngOnInit() { }

  getRestaurants() {
    if (!this.city) {
      return;
    }
    
    this.service.getRestaurants(this.city).subscribe(response => {
      this.restaurants = response['restaurants'];
    });
  }

}
