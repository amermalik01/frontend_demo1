import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_demo1';

  darkMode = signal<boolean>(false);

  productList: any;

  constructor(private productService: ProductsService){

  }

  ngOnInit(){
    
    this.productService.getProductList().subscribe( (data: any)=>{
      console.log('products ==== ', data);

      // this.productList = data.products;
      this.productList = data;

    });
    
  }
}
