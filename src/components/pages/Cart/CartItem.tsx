import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addItem, reduceItem, removeItem } from "../../../store/cart/cartSlice";
import { CartProps } from "../../../types/cartTypes";
import { CartItemType } from "../../../types/cartTypes";

const CartItem = ({ product }: CartProps) => {
    const { id, title, category, count, price, images } = product;
    const dispatch = useAppDispatch();

    const addQuantity = (id: number) => {
        dispatch(
            addItem({ id } as CartItemType)
        );
    };

    const reduceQuantity = (id: number) => {
        dispatch(reduceItem(id));
    };

    const removeFromCart = (id: number) => {
        dispatch(removeItem(id));
    };

    return (
        <li className="cartItem">
            <div className="cartItem__image">
                <img src={images[0]} alt="Product" />
            </div>
            <div className="cartItem__info">
                <h3 className="cartItem__title">{title}</h3>
                <div>{category.name}</div>
            </div>
            <div className="cartItem__price">{price}$</div>
            <div className="cartItem__quantity">
                <button
                    onClick={() => reduceQuantity(id)}
                    disabled={count <= 1}>-</button>
                <div>{count}</div>
                <button onClick={() => addQuantity(id)}>+</button>
            </div>
            <div
                className="cartItem__delete-btn"
                onClick={() => removeFromCart(id)}>x</div>
        </li>
    );
};

export default CartItem;