import Promo from "./Promo";
import AppRoutes from "./AppRoutes";
import "./infoBlock.scss";

const InfoBlock = () => {
    return (
        <div className="infoBlock">
            <Promo />
            <AppRoutes />
        </div>
    );
};

export default InfoBlock;
