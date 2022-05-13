import { Injectable } from '@angular/core';
import { filter, last, map, Observable, of } from 'rxjs';
import { Item } from '../objects/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  dbURL: string =
    'https://pc-parts-store-db-default-rtdb.firebaseio.com/' + 'items.json';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.dbURL).pipe(
      map((response) => {
        const itemArray = [];
        for (const key in response) {
          itemArray.push(response[key]);
        }
        return itemArray;
      })
    );
  }

  getItemByID(id: number) {
    return this.http.get<Item[]>(this.dbURL).pipe(
      map((response) => {
        let item = new Item();
        for (const key in response) {
          if (response[key].id == id) {
            item = response[key];
            break;
          }
        }
        return item;
      })
    );
  }

  // TODO when firebase is setup
  // searchItems(search: String, keywords: String[]): Observalbe<Item[]> {
  //   return of(ITEMS);
  // }

  addItem(item: Item) {
    // Do a check to recieve the latest id
    this.getItems().subscribe(data => {
      console.log(data);
      try {
        item.id = data[data.length-1].id + 1;
      } catch {
        item.id = 1;
      }
      this.http.post(this.dbURL, item).subscribe(data => console.log(data));
    });
  }
  updateItemStock(item: Item, changeAmount: number) {
    var currentItems: Item[] = [];
    this.getItems().subscribe(data => currentItems = data);

    delete currentItems[currentItems.indexOf(item)];
    item.stockAmount += changeAmount;
    currentItems.push(item);

    this.http.delete(this.dbURL).subscribe( data => {
      for (let i of currentItems) {
        this.http.post(this.dbURL, i).subscribe();
      }
    });
  }
/*
  getName(item : Item) : String {
    return item.name;
  }
  getPrice(item : Item) : number {
    return item.price;
  }
  getPartType(item : Item) : String {
    return item.partType;
  }
*/
getStockAmount(item : Item) : number {
  return item.stockAmount;
}

purgeDataBase(): void {
  let firstItems: Item[] = [];
  let allItems: Item[] = [];
  this.getItems().subscribe(data => allItems = data);
  for (let i : number = 0; i < 34; i++) {
    firstItems[i] = allItems[i];
  }
  this.http.delete(this.dbURL).subscribe(data => {
    for (let i of firstItems) {
      this.http.post(this.dbURL, i).subscribe();
    }
  });
}
}
