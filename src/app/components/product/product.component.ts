import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';

import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/services/basket.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  filterText=""

  constructor(
    private productService: ProductService,
    private activatedRouted: ActivatedRoute,
    private basketService:BasketService
  ) {}
  ngOnInit(): void {
  this.activatedRouted.params.subscribe(params=>{
    if (params["categoryId"]){
     this.getProductsByCategory(params["categoryId"])
    }

     else {
      this.getProducts();
    }}


)
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
    }
    
    );



  }
  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe((response) => {
      this.products = response.data;
    }
  );}
 addToCart(product:Product){
  this.basketService.addToCart(product);


 }


}
