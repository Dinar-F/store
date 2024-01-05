import { useState, useEffect } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useGetProductQuery } from "../../../store/products/productsReduser";
import { useParams } from "react-router-dom";
import { addItem } from "../../../store/cart/cartSlice";
import "./singleProduct.scss";

const SingleProduct = () => {
    const dispatch = useAppDispatch();
    const [currentImage, setCurrentImage] = useState<string>();
    const { id } = useParams();

    const { data, isLoading } = useGetProductQuery(id!);

    useEffect(() => {
        if (!data?.images.length) return;
        setCurrentImage(data.images[0]);
    }, [data]);

    const addToCart = () => {
        if (!data) return;
        dispatch(addItem(data));
    };

    return (
        <section className="singleProduct">
            {!data ?
                (<div>Товар не найден</div>) :
                isLoading ?
                    (<div>загрузка</div>) :
                    (
                        <>
                            <div className="singleProduct__images">
                                {<div
                                    className="singleProduct__current-image"
                                    style={{ backgroundImage: `url(${currentImage})` }}
                                />}
                                <div className="singleProduct__addition-images">
                                    {data?.images?.map((image, i) => (
                                        <div
                                            key={i}
                                            style={{ backgroundImage: `url(${image})` }}
                                            onClick={() => setCurrentImage(image)} />
                                    ))}
                                </div >
                            </div>
                            <div className="singleProduct__info">
                                <h1 className="singleProduct__title">{data.title}</h1>
                                <div className="singleProduct__price">{data.price}$</div>
                                <div className="singleProduct__color">
                                    <span>Color :</span> Red
                                </div>
                                <p className="singleProduct__description">{data.description}</p>
                                <div className="singleProduct__actions">
                                    <button
                                        onClick={addToCart}
                                        className="action_add_btn">Add to cart</button>
                                </div>
                            </div>
                        </>
                    )}
        </section>
    );
};

export default SingleProduct;