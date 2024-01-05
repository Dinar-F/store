import Categories from "../Categories/Categories";
import Filters from "../Filters/Filters";
import Products from "../Products/Products";
import FilteredProducts from "../Products/FilteredProducts";

const Content = () => {
    return (
        <div className="content">
            <Categories />
            <Filters/>
            <Products/>
            <FilteredProducts/>
        </div>
    );
};

export default Content;
