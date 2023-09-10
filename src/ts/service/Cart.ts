import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calculateTotalPrice(): number {
        let totalPrice = 0;
        for (const item of this.items) {
            totalPrice += item.price;
        }
        return totalPrice;
    }

    calculateTotalPriceWithDiscount(discount: number): number {
        const totalPrice = this.calculateTotalPrice();
        return totalPrice - ((totalPrice * discount) / 100);
    }

    deleteItem(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}