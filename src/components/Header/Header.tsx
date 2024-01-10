import SearchForm from "./SearchForm";
import { Link, useNavigate } from "react-router-dom";
import { toggleForm } from "../../store/user/userSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useState, useEffect, useCallback } from "react";
import { ROUTES } from "../../constants";
import mainLogo from "../../images/mainLogo.svg";
import cartLogo from "../../images/cart.svg";
import avatar from "../../images/account_profile_user_avatar_icon_219236.svg";
import "./header.scss";

const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const currentUser = useAppSelector(state => state.profile.currentUser);
    const cartlist = useAppSelector((state) => state.cart.cartList);
    const [userValues, setUserValues] = useState({ name: "Guest", avatar: avatar });

    useEffect(() => {
        if (currentUser) {
            setUserValues(currentUser);
        }
    }, [currentUser]);

    const showAuthForm = useCallback(() => {
        if (!currentUser) dispatch(toggleForm(true));
        else navigate(ROUTES.PROFILE);
    }, [currentUser, dispatch, navigate]);

    return (
        <header className="header">
            <Link to={ROUTES.BANNER}>
                <img src={mainLogo} alt="logo" />
            </Link>
            <SearchForm />
            <div className="user header__user">
                <img
                    className="user__logo"
                    src={userValues.avatar}
                    alt="user"
                    onClick={showAuthForm} />
                <div className="user__name">Hello, {userValues.name}</div>
                <Link to={ROUTES.CART} className="user__cart">
                    <img src={cartLogo} alt="cart" />
                    {!!cartlist.length &&
                        <span className="user__cart_count">{cartlist.length}</span>}
                </Link>
            </div>
        </header>
    );
};

export default Header;