import { Injectable } from '@angular/core';
import { Item } from '../objects/item';
import { ITEMS } from '../objects/itemdb';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Item[] {
    return ITEMS;
  }

  // TODO when account service is finished
  // getItemsBySeller(seller: Seller): Item[] {
  //   return ITEMS;
  // }

  // TODO when firebase is setup
  // searchItems(search: String, keywords: String[]): Item[] {
  //   return null;
  // }

  addItem(item: Item): void {
    ITEMS.push(item);
  }

  deleteItemByItem(item: Item): void {
    this.deleteItemByIndex(this.getItems().indexOf(item));
  }

  deleteItemByIndex(i: number): void {
    this.getItems().splice(i, 1);
  }

}
