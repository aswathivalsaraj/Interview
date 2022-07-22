import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public title!: string;
  public footerTxt!: string;

  public products: any;
  constructor(private product: ProductsService) { }

  ngOnInit(): void {
    this.product.getProducts().subscribe((data: any)=>{
      this.products = data.products;
      this.title = data.header;
      this.footerTxt = data.footerTxt;
    });
    console.log(this.products);
  }

}
