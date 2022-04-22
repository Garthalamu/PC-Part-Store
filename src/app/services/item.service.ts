import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../objects/item';
import { ITEMS } from '../objects/itemdb';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }

  getItemByID(id: number): Observable<Item> {
    let item: Item = new Item();
    ITEMS.forEach((value) => {
      let done: boolean = false;
      if (!done) {
        if (value.id === id) {
          item = value;
          done = true;
        }
      }
      return;
    });
    return of(item);
  }

  // TODO when account service is finished
  // getItemsBySeller(seller: Seller): Observalbe<Item[]> {
  //   return of(ITEMS);
  // }

  // TODO when firebase is setup
  // searchItems(search: String, keywords: String[]): Observalbe<Item[]> {
  //   return of(ITEMS);
  // }

  addItem(item: Item): void {
    ITEMS.push(item);
  }

  deleteItemByItem(item: Item): void {
    this.deleteItemByIndex(ITEMS.indexOf(item));
  }

  deleteItemByIndex(i: number): void {
    ITEMS.splice(i, 1);
  }

}
