import { ComputerPart, Item } from "./item"

export let ITEMS: Item[] = [
    {
        id: 1,
        name: "Test CPU",
        price: 55.40,
        stockAmount: 5,
        image: null,
        keywords: ["4 core", "am4"],
        partType: ComputerPart.CPU,
        seller: "Test Seller 1"
    },
    {
        id: 2,
        name: "Test GPU",
        price: 2504.68,
        stockAmount: 24,
        image: null,
        keywords: ["large", "fast"],
        partType: ComputerPart.GPU,
        seller: "Test Seller 1"
    },
    {
        id: 3,
        name: "Test Fan",
        price: 120.15,
        stockAmount: 154,
        image: null,
        keywords: ["rgb", "noiseless"],
        partType: ComputerPart.FAN,
        seller: "Test Seller 2"
    },
    {
        id: 4,
        name: "Test Case",
        price: 153.10,
        stockAmount: 2,
        image: null,
        keywords: ["rgb", "small"],
        partType: ComputerPart.CASE,
        seller: "Test Seller 1"
    },
    {
        id: 5,
        name: "Test Motherboard",
        price: 342.89,
        stockAmount: 11,
        image: null,
        keywords: ["small", "rgb"],
        partType: ComputerPart.MOTHERBOARD,
        seller: "Test Seller 2"
    },
    {
        id: 6,
        name: "Test Storage",
        price: 40.00,
        stockAmount: 25,
        image: null,
        keywords: ["ddr4", "124 pin"],
        partType: ComputerPart.STORAGE,
        seller: "Test Seller 2"
    },
    {
        id: 7,
        name: "Test PSU",
        price: 435.23,
        stockAmount: 1342,
        image: null,
        keywords: ["gold rating", "small"],
        partType: ComputerPart.PSU,
        seller: "Test Seller 3"
    }
]