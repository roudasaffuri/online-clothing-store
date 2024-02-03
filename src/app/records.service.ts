
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  
  public counter: number = 0;
  public shoppingBag: any[] = [];

  constructor() { }

  addToCart(item: any): void {
    this.counter++;
    console.log('Item added to cart. New count:', this.counter);
    this.shoppingBag.push(item);
    console.log('Shopping bag:', this.shoppingBag);
    
  }
}
