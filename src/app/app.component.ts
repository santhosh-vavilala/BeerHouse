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
  styles = [];
  data = [];
  constructor(public httpService: HttpService) {
    this.title = httpService.msg;
    this.getBeers();
    
    
  }

  public getBeers() {
    this.httpService.getBeers().subscribe(data => { console.log(data.json()); this.beers = data.json().data; this.loadData() });
  }

  loadData(){
    this.sort();
    this.beers.forEach(beer => this.styles.push(beer.style.name));
    this.styles = this.styles.filter((x, i, a) => a.indexOf(x) == i);
    this.data = this.beers;
  }

  
  public onChange(deviceValue) {
    this.filterByProperty('name',deviceValue,'style')
    console.log(deviceValue);
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

  public filterByProperty(prop: string, value: string, mainprop:string) {
    this.beers = this.data;
    this.beers = this.beers.filter(function (el) {
      if(mainprop == ''){
        console.log('ssaas',el[mainprop][prop])
      return (el[prop] == value);
      }
      else{
        console.log('sss',el[mainprop][prop])
        return (el[mainprop][prop] == value);
      }
    });
  }
}




