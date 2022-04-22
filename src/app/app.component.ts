import { Component } from '@angular/core';
import { Item } from './objects/item';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PC-Part-Store';

  // DEBUG
  constructor(private itemService: ItemService) { }

  items: Item[] = [];

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
