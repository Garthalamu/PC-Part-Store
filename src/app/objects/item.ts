export class Item {
    id: number = -1;
    name: String = "";
    price: number = -1;
    stockAmount: number = -1;
    image: String | null = null;
    keywords?: String[] = [];
    partType: ComputerPart | null = null;
    seller: String = ""; // TODO change to an account type
}

export enum ComputerPart {
    CPU,
    GPU,
    FAN,
    CASE,
    MOTHERBOARD,
    STORAGE,
    PSU
}