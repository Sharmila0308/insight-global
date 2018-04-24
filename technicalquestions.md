1. I spent 3 hours on the coding test. If I was given more time, I would add pagination and also display the price as a range (For Eg 1- $, 2- $$)instead of a number using a custom pipe.
2. I used the simplified http request (HttpClient) in Angular 5. Here is the snippet of the code-
import { HttpClient } from '@angular/common/http';
@Injectable()
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurants(city: String){
    return this.http.get('http://opentable.herokuapp.com/api/restaurants?city=' + city);
  }

}

3. I use the Memory tab in the debugger of the browser and and start the Heap Snapshot and stop it when the site is completely loaded and troubleshoot based on the captured snapshot in which I get the amount of time each function is taking to load. 

4. Rest API should return the list of restaurants based on the latitude and longitude. 

myself = {
“firstname": “Sharmila”,
"lastname": “Parashara”,
"livesin": “Scarborough,
"passions": [
“Computer Science”
],
"interests": [
“Cooking”,

“Gardening”
],

strengths

“commitment”,

“sincerity”

"believes": [

“that Computer Science technologies are growing rapidly. I don’t believe in particular tool or technology. Ultimately, it is all about solving problems using computer science and reduce human effort”

]

}