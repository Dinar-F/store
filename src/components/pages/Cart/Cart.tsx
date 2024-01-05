import CartItem from "./CartItem";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { calcTotalPrice } from "../../../utils/calcTotalPrice";
import "./Cart.scss";

const Cart = () => {
    const cartlist = useAppSelector((state) => state.cart.cartList);

    return (
        <section className="cart">
            <h2 className="cart__title">Your Cart</h2>
            {!cartlist.length ? (
                <h2 className="cart__notice">Here is empty</h2>
            ) : (
                <ul className="cart__list">
                    {cartlist.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}
                </ul>
            )}
            {cartlist?.length ? (<div className="cart__actions">
                <div className="cart__total">Total price: {calcTotalPrice(cartlist)}$</div>
                <button className="cart__pay">Proceed to checkout</button>
            </div>) : (null)}
        </section>
    );
};

export default Cart;