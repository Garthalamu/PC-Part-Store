import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/objects/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemServ: ItemService) { }

  ngOnInit(): void {
    this.itemServ.getItems().subscribe(data => this.items = data)
  }

}
