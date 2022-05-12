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

  items: Item[] = [];

  constructor(private itemServ: ItemService) { }

  ngOnInit(): void {
    this.itemServ.getItems().subscribe(data => this.items = data)
  }


}
