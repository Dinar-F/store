import { AvatarType } from "./types/userTypes";

export const ROUTES = {
    BANNER: "/",
    PRODUCT: "/singleProduct/",
    CART: "/cart",
    PROFILE: "/profile",
};

export const BASE_URL = "https://api.escuelajs.co/api/v1";

export const FORM_TYPE = {
    SIGN_IN: "signIn",
    LOG_IN: "logIn"
};

export const avatar: AvatarType[] = [
    { id: 1, image: "https://cdn.icon-icons.com/icons2/582/PNG/512/man-2_icon-icons.com_55041.png" },
    { id: 2, image: "https://cdn.icon-icons.com/icons2/582/PNG/512/girl_icon-icons.com_55043.png" },
    { id: 3, image: "https://cdn.icon-icons.com/icons2/3579/PNG/512/beard_man_people_person_avatar_tramp_icon_225744.png" },
];

export const defaultPriceLimit = {
    price_min: "",
    price_max: "",
};
