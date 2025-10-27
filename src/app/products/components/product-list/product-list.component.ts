import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[] = [];
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log('Component initialized... Fetching products');

    this.productService.getProducts().subscribe({
      next: (data: any[]) => {
        this.products = data;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error fetching products:', err);
        this.loading = false;
      },
      complete: () => {
        console.log('API call completed.');
      }
    });
  }
}

