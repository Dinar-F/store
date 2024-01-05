import banner from "../../../images/banner.svg";
import "./banner.scss";


const Banner = () => {
    return (
        <section className="banner">
                <div className="banner__info">
                    <div className="banner__title">
                        Let’s explore unique stuff.
                    </div>
                    <div className="banner__subtitle">
                        the bestseller of 2022
                    </div>
                </div>
                <div className="banner__image">
                    <img src={banner} alt="Banner" />
                </div>
        </section>

    );
};

export default Banner;