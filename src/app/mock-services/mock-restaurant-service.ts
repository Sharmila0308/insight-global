import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { RestaurantService } from '../services/restaurant.service';

@Injectable()
export class MockRestaurantService extends RestaurantService {

  constructor(http: HttpClient) {
      super(http);
   }

  getRestaurants(city: String){
    return Observable.of({ "total_entries": 142, "per_page": 5, "current_page": 1, "restaurants": [{ "id": 23323, "name": "Europea", "address": "1227, rue de la Montagne", "city": "Montreal", "state": "QC", "area": "Montreal / Quebec", "postal_code": "H3G1Z2", "country": "CA", "phone": "5143989229", "lat": 45.497334, "lng": -73.573668, "price": 4, "reserve_url": "http://www.opentable.com/single.aspx?rid=23323", "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=23323", "image_url": "https://www.opentable.com/img/restimages/23323.jpg" }, { "id": 28072, "name": "Bonaparte", "address": "443 rue St-Francois-Xavier", "city": "Montreal", "state": "QC", "area": "Montreal / Quebec", "postal_code": "H2Y 2T1", "country": "CA", "phone": "5148444368", "lat": 45.503286, "lng": -73.556355, "price": 3, "reserve_url": "http://www.opentable.com/single.aspx?rid=28072", "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=28072", "image_url": "https://www.opentable.com/img/restimages/28072.jpg" }, { "id": 107599, "name": "La Societe - Montreal", "address": "1415 de La Montagne", "city": "Montreal", "state": "QC", "area": "Montreal / Quebec", "postal_code": "H3G 1Z3", "country": "CA", "phone": "5145079223x", "lat": 45.498105, "lng": -73.575458, "price": 3, "reserve_url": "http://www.opentable.com/single.aspx?rid=107599", "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=107599", "image_url": "https://www.opentable.com/img/restimages/107599.jpg" }, { "id": 35944, "name": "GRANGE vin+bouffe", "address": "120, rue McGill", "city": "Montreal", "state": "QC", "area": "Montreal / Quebec", "postal_code": "H2Y 2E5", "country": "CA", "phone": "5143949463", "lat": 45.499782, "lng": -73.555722, "price": 3, "reserve_url": "http://www.opentable.com/single.aspx?rid=35944", "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=35944", "image_url": "https://www.opentable.com/img/restimages/35944.jpg" }, { "id": 78952, "name": "Deville Dinerbar", "address": "1425 Stanley", "city": "Montreal", "state": "QC", "area": "Montreal / Quebec", "postal_code": "H3A1P4", "country": "CA", "phone": "5142816556x", "lat": 45.499674, "lng": -73.574285, "price": 3, "reserve_url": "http://www.opentable.com/single.aspx?rid=78952", "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=78952", "image_url": "https://www.opentable.com/img/restimages/78952.jpg" }] });
  }

}
