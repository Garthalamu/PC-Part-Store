import { ItemsToPurchase } from "./itemsToPurchase";

export class User {
    id: number = 0;
    userName: String = "";
    password: String = "";
    email: String = "";
    ccNumber: String = "";
    cart: ItemsToPurchase[] = [];
}