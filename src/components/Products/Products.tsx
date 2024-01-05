import ProductCard from "./ProductCard/ProductCard";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useGetProductsQuery } from "../../store/products/productsReduser";
import { setLimit } from "../../store/filter/filterSlice";
import "./products.scss";

const Products = () => {
    const dispatch = useAppDispatch();
    const params = useAppSelector(state => state.filter);

    const { data } = useGetProductsQuery(params);

    const changeLimit = () => {
        dispatch(setLimit());
    };

    return (
        <section className="products">
            {data?.length ?
                <>
                    <ul className="products__list">
                        {data.map((product) => (
                            <ProductCard key={product.id} product={product} />))}
                    </ul>
                    <button
                        disabled={data.length < params.limit}
                        className="products__button"
                        onClick={changeLimit}>See more
                    </button>
                </>
                : <div>Products not found</div>}
        </section >
    );
};

export default Products;