import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadSchemaDataSource } from './product-read-schema-datasource';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read-schema',
  templateUrl: './product-read-schema.component.html',
  styleUrls: ['./product-read-schema.component.css']
})
export class ProductReadSchemaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: ProductReadSchemaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.dataSource = new ProductReadSchemaDataSource();    
    this.productService.readAll().subscribe(products => {
      this.dataSource.data = products                
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;    
  }
}
