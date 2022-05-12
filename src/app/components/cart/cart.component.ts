import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/objects/item';
import { ItemService } from 'src/app/services/item.service';
import { Observable, tap, merge } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { createDirectiveTypeParams } from '@angular/compiler/src/render3/view/compiler';
import { ItemsToPurchase } from 'src/app/objects/itemsToPurchase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

   
  itemCart : ItemsToPurchase[] = []
  
  amountToAdd: number = 1;
  totalPrice: number = -1;
  totalCost : number = 0;


  constructor(private itemService: ItemService, private userService: UserService) { }



 ngOnInit(): void {
    let cartLength : number = this.userService.signedIn.cart.length;
    for (let start : number = 0; start < cartLength; start++){
      this.itemCart.push(this.userService.signedIn.cart[start])
    }
     
 }

 add(item : ItemsToPurchase): void {
   let n : number = this.userService.signedIn.cart.indexOf(item);
   this.userService.signedIn.cart[n].amount++;
 }

 minus(item : ItemsToPurchase): void {
    let n : number = this.userService.signedIn.cart.indexOf(item);
    this.userService.signedIn.cart[n].amount--;
 }
 removeItem(cart : ItemsToPurchase) : void {
   let n : number = this.userService.signedIn.cart.indexOf(cart);
   this.userService.signedIn.cart.slice(n, 1);
 }
 getTotalCost() : number {
    this.totalCost = 0;
    let cartLength : number = this.userService.signedIn.cart.length;
   for (let start : number = 0; start < cartLength; start++){
      this.totalCost = this.totalCost + (this.userService.signedIn.cart[start].item.price * this.userService.signedIn.cart[start].amount);
   }
   return this.totalCost;
 }
 checkout() : void {
   let newArray : ItemsToPurchase[] = []
   this.userService.signedIn.cart = newArray;
   /*let cartLength : number = this.userService.signedIn.cart.length;
   for (let start : number = 0; start < cartLength; start++){
      this.userService.signedIn.cart.pop();
    }*/
    this.ngOnInit()
 }
 resetCost() : void {
    this.totalCost = 0;
 }

}

