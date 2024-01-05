import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants";
import { CardProps } from "../../../types/productTypes";

const ProductCard: React.FC<CardProps> = ({ product }) => {
    const { id, price, title, category, images } = product;

    const handleClick = () => {
        scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <Link
            to={`${ROUTES.PRODUCT}${id}`}
            onClick={handleClick}>
            <li className="product">
                <img className="product__image" src={images[0]} alt="card photo" />
                <h4 className="product__title">{title}</h4>
                <div className="product__category">{category.name}</div>
                <div className="product__price">{price}$</div>
            </li>
        </Link>
    );
};

export default ProductCard;