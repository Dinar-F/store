import { useGetCategoriesQuery } from "../../store/products/productsReduser";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setCategoryId } from "../../store/filter/filterSlice";
import { CategoryType } from "../../types/productTypes";
import "./categories.scss";


const Categories = () => {
    const dispatch = useAppDispatch();
    const { data } = useGetCategoriesQuery();

    const list: CategoryType[] = data?.filter((_, i) => i < 5) || [];

    const handleClick = (id: number) => {
        dispatch(setCategoryId(id));
    };

    return (
        <section className="categories">
            <h2 className="categories__title">Worth seeing</h2>
            <ul className="categories__list">
                {list.length && list.map(({ id, name, image }) =>
                    <li
                        key={id}
                        className="categories__item"
                        onClick={() => handleClick(id)}>
                        <img src={image} alt="" />

                        <h3>{name}</h3>
                    </li>
                )}
            </ul>
        </section >);
};

export default Categories;