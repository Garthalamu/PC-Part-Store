import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Item} from '../objects/item';
import {map, Observable}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  dbURL: string = 
    'https://pc-parts-store-db-default-rtdb.firebaseio.com/' + 'items.json';

  constructor(private http: HttpClient) { }

  getItemByPrice(price: number){
    return this.http.get<Item[]>(this.dbURL).pipe(
      map((response) => {
        const items: Item[]=[];
        for( const key in response){
          if(response[key].price == price){
            items.push(response[key]);
            break;
          }
        }
        return items;
      })
    );
  }

  getItemByPriceRange(min: number, max: number){
    return this.http.get<Item[]>(this.dbURL)
    .pipe(map(response =>{
      const itemarr: Item[]=[];
      for(const key in response){
        if(response[key].price>= min && response[key].price <= max){
          itemarr.push(response[key]);
        }
      }
      return itemarr;
    }))
  }

  IsStocked(){
    return this.http.get<Item[]>(this.dbURL)
    .pipe(map(response =>{
      const itemarr: Item[]=[];
      for(const key in response){
        if(response[key].stockAmount <=1){
          itemarr.push(response[key]);
        }
      }
      return itemarr;
    }))
  }

  getPartType(type: string){
    return this.http.get<Item[]>(this.dbURL)
    .pipe(map(response =>{
      const itemarr: Item[] = [];
      for(const key in response){
        if(response[key].partType == type){
          itemarr.push(response[key]);
        }
      }
    }))
  }
}
