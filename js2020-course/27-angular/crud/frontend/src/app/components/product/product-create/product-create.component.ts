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

  // private req: Observable<Product>

  private product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) {

   }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    
    // Crazy test
    // this.req = this.productService.create(this.product)
    // this.req.subscribe(_ => this.productService.showMessage('Product created"'))
    // this.req.subscribe(_ => this.router.navigate(['/products']))
    
    this.productService.create(this.product).subscribe(() =>  {
      this.productService.showMessage('Product created"')
      this.router.navigate(['/products'])
    })
    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
