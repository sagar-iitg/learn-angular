import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProductListComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
