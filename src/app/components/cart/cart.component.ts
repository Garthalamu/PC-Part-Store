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
  mess : String [] = []
  checkoutMessage1 : String = "Thank you for your purchase!";
  checkoutmessage2 : String = "Enjoy your items!";

  
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
   this.userService.signedIn.cart[n].amount = 0;
   this.userService.signedIn.cart.slice(n, 1);
 }
 getTotalCost() : number {
    let newArray : String [] = []
    this.totalCost = 0;
    let cartLength : number = this.userService.signedIn.cart.length;
   for (let start : number = 0; start < cartLength; start++){
      this.totalCost = this.totalCost + (this.userService.signedIn.cart[start].item.price * this.userService.signedIn.cart[start].amount);
   }
   this.mess = newArray;
   return this.totalCost;
 }
 checkout() : void {
   this.updateStock();
   let newArray : ItemsToPurchase[] = []
   let cartLength : number = this.userService.signedIn.cart.length;
   for (let start : number = 0; start < cartLength; start++){
      this.userService.signedIn.cart[start].amount = 0;
    }
    this.userService.signedIn.cart = newArray;
    this.ngOnInit()
    this.mess.push(this.checkoutMessage1);
    this.mess.push(this.checkoutmessage2);
 }
 updateStock() : void {
  let cartLength : number = this.userService.signedIn.cart.length;
  for (let start : number = 0; start < cartLength; start++){
    let amountToDrop : number = (this.userService.signedIn.cart[start].amount);
    let id : number = this.userService.signedIn.cart[start].item.id
    let dataItem : Item = new Item();
    this.itemService.getItemByID(id).subscribe(data => dataItem = data);
    // this.itemService.updateItemStock(dataItem, -amountToDrop);
  }
 }

}

