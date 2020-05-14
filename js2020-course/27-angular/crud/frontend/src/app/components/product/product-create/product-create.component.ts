import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  private product: Product = {
    name: 'aa',
    price: null
  }

  get _product():Product {
    return this.product
  }

  set _product(product: Product){
    this.product = product
  }

  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    
    this.productService.create(this.product).subscribe(() =>  {
      this.productService.showMessage('Product created"')
      this.router.navigate(['/products'])
    })
    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

  
}
