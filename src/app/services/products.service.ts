import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private title!:string;
  constructor() { }
  public getPageTitle(): string {
    
    return this.title;
  }
}
