import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details = {};
  isLoading = true;
  constructor(public httpService: HttpService) { }

  ngOnInit() {
  }

  public getBeerDetails(id:string)
  {
    this.isLoading = true;
    console.log('beer details:',id)
    this.httpService.getBeersById(id).subscribe(data => { console.log(data.json()); this.details = data.json().data; this.loadData() });
  }

  public loadData()
  {
    this.isLoading = false;
    console.log('load data')
  }

}
