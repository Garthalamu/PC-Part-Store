import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/objects/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
