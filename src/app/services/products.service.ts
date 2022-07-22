import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from './../../server/config/config.json';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private title!:string;
  private apiUrl: string;
  constructor(private http: HttpClient) { 
    const configData = JSON.parse(JSON.stringify(config));
    this.apiUrl     = configData ? (configData.hostname +":"+configData.port): "";
  }
  public getProducts() {
    return this.http.get(this.apiUrl+"/products"); 
  }
}
