import Banner from "../pages/Banner/Banner";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Cart from "../pages/Cart/Cart";
import Profile from "../pages/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../../constants";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={ROUTES.BANNER} element={<Banner />} />
            <Route path={`${ROUTES.PRODUCT}:id`} element={<SingleProduct />} />
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
        </Routes>
    );
};

export default AppRoutes;