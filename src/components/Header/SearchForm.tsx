import Spinner from "../Spinner/Spinner";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useGetProductsQuery } from "../../store/products/productsReduser";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

const SearchForm = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const debouncedValue: string = useDebounce(searchValue, 800);

    const { data, isLoading } = useGetProductsQuery({ title: debouncedValue }, {
        skip: debouncedValue.length < 1
    });

    const changeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        < form className="search"
            onSubmit={handleSubmit}>
            <input
                type="search"
                name="search"
                placeholder="Search for anyting..."
                autoComplete="off"
                value={searchValue}
                onChange={changeSearchValue}
            />
            {debouncedValue && (
                <div className="search__result">
                    {isLoading
                        ? <Spinner />
                        : !data?.length
                            ? <div>No result</div>
                            : data.map(({ title, id, images }) => {
                                return (
                                    <Link
                                        to={`${ROUTES.PRODUCT}${id}`}
                                        key={id}
                                        className="search__result-item"
                                        onClick={() => setSearchValue("")}>
                                        <img src={images[0]} alt={title} />
                                        <div>{title}</div>
                                    </Link>
                                );
                            })}
                </div>)}
        </form >
    );
};

export default SearchForm;