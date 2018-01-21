import { Component } from '@angular/core';
import { HttpService } from '../services/http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  beers = [];
  constructor(public httpService: HttpService) {
    this.title = httpService.msg;
    this.getBeers();
    this.sort();
  }

  public getBeers() {
    this.httpService.getBeers().subscribe(data => { console.log(data.json()); this.beers = data.json().data });
  }

  public sort() {
    this.beers.sort(function (name1, name2) {
      if (name1.name < name2.name) {
        return -1;
      } else if (name1.name > name2.name) {
        return 1;
      } else {
        return 0;
      }
    })
  }

  public orderByName() {
    this.beers.reverse();
  }

  public filterByProperty(prop: string, value: string) {
    console.log('filter method', prop, value)
    this.beers = this.beers.filter(function (el) {
      return (el[prop] == value);
    });
  }
}




