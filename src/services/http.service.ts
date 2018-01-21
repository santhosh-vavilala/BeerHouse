import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpService {
  data = [];
  msg = "test from HttpService";
  baseURL = "http://api.brewerydb.com/v2/";
  apiKey = "dd1b9ea105cb7bcabd012c76c9576c51";
  newapiKey = "3f7f4b000b293ba3775a4c8d0eb95cd5"
  

  constructor(private http: Http) { }

  public getBeers()
  {
      let requestURL = 'http://localhost:3000/api';
      return  this.http.get(requestURL);
  }

  public getBeersById(id:string)
  {
      let requestURL = 'http://localhost:3000/api';
      return  this.http.get(requestURL);
  }

  public searchBeers(qstring: string)
  {
      let requestURL = 'http://localhost:3000/api/' + qstring;
      return  this.http.get(requestURL);
  }

}
