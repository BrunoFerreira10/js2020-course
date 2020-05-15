import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    
  }

  createProduct(): void {    
    this.productService.create(this.product).subscribe(() =>  {
      this.productService.returnToList()
      this.productService.showMessage('Product created"')      
    })
    
  }

  cancel() {
    this.productService.returnToList()
  }

  
}
