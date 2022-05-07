import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/objects/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {

  items : Item [] = []
  displayItems : Item[] = []
  item: Item = new Item();
  totalPrice: number = -1;
  amountToAdd: number = 1;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }
  chooseCPU() : void{
    let i = this.itemService.getItems.length;
    for (let j = 0; j < i; j++){
      let p : String = this.items[j].getPartType(this.items[j]);
      if (p == 'CPU'){
        this.displayItems.push(this.items[j]);
      }
    }
  }
  chooseMotherboard() : void{
    let i = this.itemService.getItems.length;
    for (let j = 0; j < i; j++){
      let p : String = this.items[j].getPartType(this.items[j]);
      if (p == 'Motherboard'){
        this.displayItems.push(this.items[j]);
      }
    }
  }
  chooseGPU() : void{
    let i = this.itemService.getItems.length;
    for (let j = 0; j < i; j++){
      let p : String = this.items[j].getPartType(this.items[j]);
      if (p == 'GPU'){
        this.displayItems.push(this.items[j]);
      }
    }
  }
  chooseStorage() : void{
    let i = this.itemService.getItems.length;
    for (let j = 0; j < i; j++){
      let p : String = this.items[j].getPartType(this.items[j]);
      if (p == 'Storage'){
        this.displayItems.push(this.items[j]);
      }
    }
  }
  choosePowerSupply() : void{
    let i = this.itemService.getItems.length;
    for (let j = 0; j < i; j++){
      let p : String = this.items[j].getPartType(this.items[j]);
      if (p == 'Power Supply'){
        this.displayItems.push(this.items[j]);
      }
    }
  }
  chooseMonitor() : void{
    let i = this.itemService.getItems.length;
    for (let j = 0; j < i; j++){
      let p : String = this.items[j].getPartType(this.items[j]);
      if (p == 'Monitor'){
        this.displayItems.push(this.items[j]);
      }
    }
  }
  minus(): void {
    this.amountToAdd = this.amountToAdd > 1 ? this.amountToAdd - 1 : 1;
  }

  add(): void {
    this.amountToAdd = this.amountToAdd < this.item.stockAmount ? this.amountToAdd + 1 : this.amountToAdd;
  }

}
