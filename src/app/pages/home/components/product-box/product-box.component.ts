import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();


  // product: Product | undefined = {
  //   id: 1,
  //   title: 'Snickers',
  //   price: 150,
  //   category: 'Shoes',
  //   description: 'Description',
  //   image: 'https://via.placeholder.com/150',
  // };


  constructor() {}

  ngOnInit() {}

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
