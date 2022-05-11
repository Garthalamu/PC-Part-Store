import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/objects/item';
import { ItemService } from 'src/app/services/item.service';
import { Observable, tap, merge } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

   
  cartItems : Item[] = []
  
  amountToAdd: number = 1;
  totalPrice: number = -1;


  constructor(private itemService: ItemService, private userService: UserService) { }



 ngOnInit(): void {
     
 }

 add(item : Item): void {
    this.amountToAdd = this.amountToAdd < this.itemService.getStockAmount(item) ? this.amountToAdd + 1 : this.amountToAdd;
 }

 minus(): void {
    this.amountToAdd = this.amountToAdd > 1 ? this.amountToAdd - 1 : 1;
 }
 createCart(items : Item[] ){
    this.cartItems = items;
 }
 removeFromCart() : void {

 }

}

