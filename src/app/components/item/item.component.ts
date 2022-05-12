import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/objects/item';
import { ItemsToPurchase } from 'src/app/objects/itemsToPurchase';
import { User } from 'src/app/objects/user';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemid: number = -1;
  item: Item = new Item();

  amountToAdd: number = 1;
  totalPrice: number = -1;

  currUser: User = new User();

  baseItem: Item = new Item();

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getItem();
    console.log(this.item);
  }

  ngDoCheck(): void {
    this.totalPrice = Math.round(this.amountToAdd * this.item.price*100)/100;
  }

  minus(): void {
    this.amountToAdd = this.amountToAdd > 1 ? this.amountToAdd - 1 : 1;
  }

  add(): void {
    this.amountToAdd = this.amountToAdd < this.item.stockAmount ? this.amountToAdd + 1 : this.amountToAdd;
  }

  getItem(): void {
    this.itemService.getItemByID(this.itemid).subscribe(data => {
      this.item = data;
      console.log(data);
    });
  }

  addToCart(): void {
    this.currUser = this.userService.getSignedInUser();

    let purchase = new ItemsToPurchase();
    purchase.amount = this.amountToAdd;
    purchase.item = this.item;

    if (this.currUser.cart == null) {
      this.currUser.cart = [];
    }
    this.currUser.cart.push(purchase);

    this.userService.updateUsersCart(this.currUser);
  }
}
