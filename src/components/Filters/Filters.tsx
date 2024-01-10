import { useCallback, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setSearchTitle, setSearchPrice, removeFilters } from "../../store/filter/filterSlice";
import { defaultPriceLimit } from "../../constants";
import "./filters.scss";

const Filters = () => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState("");
    const [priceLimit, setPriceLimit] = useState(defaultPriceLimit);

    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const changePriceLimit = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceLimit((priceLimit) => ({ ...priceLimit, [event.target.name]: event.target.value }));
    }, [setPriceLimit]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setSearchTitle(title));
    };

    const priceSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setSearchPrice(priceLimit));
    };

    const resetFilters = () => {
        setTitle("");
        setPriceLimit(defaultPriceLimit);
        dispatch(removeFilters());
    };

    return (
        <section className="filters">
            <form
                className="filters__byName"
                onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Product name"
                    value={title}
                    onChange={changeTitle}
                />
            </form>
            <form
                className="filters__byPrice"
                onSubmit={priceSubmit}>
                <input
                    required
                    type="number"
                    name="price_min"
                    placeholder="min price"
                    value={priceLimit.price_min}
                    onChange={changePriceLimit}
                />
                <input
                    required
                    type="number"
                    name="price_max"
                    placeholder="max price"
                    value={priceLimit.price_max}
                    onChange={changePriceLimit}
                />
                <button>Search</button>
            </form>
            <button
                className="filters__reset"
                onClick={resetFilters}>Reset all filters</button>
        </section>
    );
};

export default Filters;