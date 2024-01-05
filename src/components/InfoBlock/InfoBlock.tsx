import Promo from "./Promo";
import AppRoutes from "./AppRoutes";
import "./infoblock.scss";

const InfoBlock = () => {
    return (
        <div className="infoBlock">
            <Promo />
            <AppRoutes />
        </div>
    );
};

export default InfoBlock;