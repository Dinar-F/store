import { CartItemType } from "../types/cartTypes";

export const calcTotalPrice = (items: CartItemType[]) => {
    if (!items.length) return;
    
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};