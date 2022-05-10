import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './objects/item';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PC-Part-Store';

  name: String = "";
  price: number = 0;

  constructor(private itemService: ItemService) { }

  items: Item[] = [];

  ngOnInit(): void {
    this.getItems();
  }

  ngOnChange(): void {
    this.getItems()
  }

  getItems(): void {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
      console.log(data);
    });
  }

}
