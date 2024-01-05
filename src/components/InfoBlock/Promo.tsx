import { getScrollHeight } from "../../utils/getScrollHeight";
import promoIcon from "../../images/promoIcon.svg";

const Promo = () => {
    
    const handleClick = () => {
        const scrollHeight = getScrollHeight();
        scrollTo({ top: scrollHeight, left: 0, behavior: "smooth" });
    };
    
    return (
        <section className="promo">
            <div className="promo__image">
                <img src={promoIcon} alt="sale" />
            </div>
            <h2 className="promo__title">just choose something under $100</h2>
            <button
                className="promo__button"
                onClick={handleClick}
            >Shop now</button>
        </section >
    );
};

export default Promo;