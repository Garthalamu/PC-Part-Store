import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { BuildComponent } from './build/build.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'item', component: ItemComponent },
  { path: 'cart', component: CartComponent },
  { path: 'build', component: BuildComponent },
  { path: 'cpu', component: ItemComponent },
  { path: 'motherboard', component: CartComponent },
  { path: 'gpu', component: BuildComponent },
  { path: 'storage', component: ItemComponent },
  { path: 'power supply', component: CartComponent },
  { path: 'monitor', component: BuildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
