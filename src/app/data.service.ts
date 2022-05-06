import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Item } from './objects/item';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{
  createDb() {
    const items = [
      {id: 1, name: 'thisName', price: 119.99, 
      stockAmount: 22, partType: 'monitor', seller: 'microsoft.com'},
      {id: 2, name: 'thatName', price: 6.99, 
      stockAmount: 67, partType: 'cable', seller: 'amazon.com'},
      {id: 3, name: 'otherName', price: 749.99, 
      stockAmount: 4, partType: 'GPU', seller: 'microsoft.com'}
    ];
    return {items};
  }

}
