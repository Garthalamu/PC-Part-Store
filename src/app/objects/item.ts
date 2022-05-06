export class Item {
    id: number = -1;
    name: String = "";
    price: number = -1;
    stockAmount: number = -1;
    keywords?: String[] = [];
    partType: String = "";
    seller: String = ""; // TODO change to an account type
} 