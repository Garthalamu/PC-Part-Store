import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/objects/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-creator',
  templateUrl: './item-creator.component.html',
  styleUrls: ['./item-creator.component.scss']
})
export class ItemCreatorComponent implements OnInit {

  constructor(private itemServ: ItemService) { }

  ngOnInit(): void {
  }

  submit(name: HTMLInputElement, price: HTMLInputElement, stock: HTMLInputElement, parttype: HTMLSelectElement): void {    
    let itemToSubmit: Item = {
      id: -1,
      name: name.value,
      price: parseFloat(price.value),
      stockAmount: parseInt(stock.value),
      partType: parttype.value
    }

    this.itemServ.addItem(itemToSubmit);
  }

}
