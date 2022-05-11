import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/objects/item';
import { ItemService } from 'src/app/services/item.service';
import { Observable, tap, merge } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Output() passArray = new EventEmitter<any>();
  items : Item[] = []
  cartArray : Item[] = []
  //itemList : Observable<Item[]> = []
  
  amountToAdd: number = 1;
  totalPrice: number = -1;


  constructor(private itemService: ItemService) { }



  getAllProducts() : void {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  }
  initItem1() : void {
  } 

  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  }
  add(item : Item): void {
    this.amountToAdd = this.amountToAdd < this.itemService.getStockAmount(item) ? this.amountToAdd + 1 : this.amountToAdd;
  }
  minus(): void {
    this.amountToAdd = this.amountToAdd > 1 ? this.amountToAdd - 1 : 1;
  }
  addToCart(item : Item) : void {
    this.cartArray.push(item);
  }
  emitCart() {
    this.passArray.emit(1);
  }


}
