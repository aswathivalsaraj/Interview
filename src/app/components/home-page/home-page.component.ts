import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public title!: string;
  constructor(private product: ProductsService) { }

  ngOnInit(): void {
    this.title = this.product.getPageTitle();
  }

}
