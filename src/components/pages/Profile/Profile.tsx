import Spinner from "../../Spinner/Spinner";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { updateProfile } from "../../../store/user/profileAcyncActions";
import { avatar } from "../../../constants";
import {UpdateValuesType } from "../../../types/userTypes";
import "./profile.scss";

const Profile = () => {
    const dispatch = useAppDispatch();
    const { currentUser, isLoading, isError } = useAppSelector(state => state.profile);
    const [userValues, setUserValues] = useState<UpdateValuesType>({
        name: "",
        email: "",
        avatar: "",
        id: 0,
    });

    useEffect(() => {
        if (!currentUser) return;
        setUserValues({
            name: currentUser.name,
            email: currentUser.email,
            avatar: currentUser.avatar,
            id:currentUser.id,
        });
    }, [currentUser]);

    const changeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserValues({ ...userValues, [event.target.name]: event.target.value });
    };

    const changeAvatar = (userImage: string) => {
        setUserValues({ ...userValues, avatar: userImage });
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(updateProfile(userValues));
    };

    return (
        <section className="profile">
            <div className="profile__images">
                {avatar.map((item) => (
                    <img
                        className={item.image === userValues.avatar
                            ? "profile__currentImg"
                            : "profile__img"}
                        key={item.id}
                        src={item.image}
                        onClick={() => changeAvatar(item.image)}
                        alt="avatar" />
                ))}
            </div>
            {isError && <div className="profile__error">Request error. Please try again</div>}
            <form
                className="profile__form"
                onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    autoComplete="off"
                    required
                    value={userValues.email}
                    onChange={changeValues} />
                <input
                    type="name"
                    placeholder="name"
                    name="name"
                    autoComplete="off"
                    required
                    value={userValues.name}
                    onChange={changeValues} />
                <button type="submit">Update user data</button>
                {isLoading &&
                    <div className="profile__loading">
                        <Spinner />
                    </div>}
            </form>
        </section>
    );
};

export default Profile;