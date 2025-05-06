import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProductList() {
    // const url = 'https://dummy-json.mock.beeceptor.com/users';
    // const url = 'https://dummyjson.com/products';
    const url = 'http://localhost:3300/users';

    return this.http.get(url);
  }

  saveProduct(prod: any) {
    this.http
      .post('http://localhost:3300/users', prod)
      .subscribe((res: any) => {
        if (res.result) {
          console.log('added successfully');
          this.getProductList();
        } else console.log('Error there');
      });
  }
}
