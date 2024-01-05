import { ProductType } from "./productTypes";

export type CartItemType = {
    count: number,
} & ProductType

export type CartState = {
    cartList: CartItemType[];
}

export type CartProps = {
    product: CartItemType;
}
