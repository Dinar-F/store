import ProductCart from "./ProductCard/ProductCard";
import { useState } from "react";
import { useGetProductsQuery } from "../../store/products/productsReduser";
import { FilterState } from "../../types/filterTypes";
import "./products.scss";

const FilteredProducts = () => {
    const defaultParams: FilterState = {
        limit: 5,
        offset: 0,
        price_min: "1",
        price_max: "100",
    };

    const [params, setParams] = useState(defaultParams);
    const { data } = useGetProductsQuery(params);

    const changeLimit = () => {
        const newLimit: number = params.limit + defaultParams.limit;
        setParams({ ...params, limit: newLimit });
    };

    return (
        <section className="products filtered-products">
            <h2>Less than 100$</h2>
            {data &&
                <>
                    <ul className="products__list filtered-products__list">
                        {data.map((product) => (
                            <ProductCart key={product.id} product={product} />))
                        }
                    </ul>
                    <button
                        disabled={data.length < params.limit}
                        className="products__button filtered-products__button"
                        onClick={changeLimit}>See more</button>
                </>
            }
        </section>
    );
};

export default FilteredProducts;