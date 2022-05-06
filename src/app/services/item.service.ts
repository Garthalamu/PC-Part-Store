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
}
