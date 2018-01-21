import { Component } from '@angular/core';
import  { HttpService } from '../services/http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  beers = [];
  constructor(public httpService:HttpService){
    this.title = httpService.msg;
    this.getBeers();
  }

  public getBeers()
  {
      this.httpService.getBeers().subscribe(data => {console.log(data.json());  this.beers = data.json()});
  }
  public sortByName(){
    
  }

  public filterByProperty()
  {

  }

}
