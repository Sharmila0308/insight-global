import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurants(city: String){
    return this.http.get('http://opentable.herokuapp.com/api/restaurants?city=' + city);
  }

}
