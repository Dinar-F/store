import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { createUser } from "../../store/user/userAcyncActions";
import { AuthProps, RegistrationValues } from "../../types/userTypes";
import { useAppSelector } from "../../hooks/useAppSelector";
import { FORM_TYPE, avatar } from "../../constants";
import "./user.scss";

const SignUpForm: React.FC<AuthProps> = ({ closeForm, changeFormType }) => {
    const dispatch = useAppDispatch();

    const { isError } = useAppSelector((state) => state.user.registration);

    const [userValues, setUserValues] = useState<RegistrationValues>({
        name: "",
        email: "",
        password: "",
        avatar: avatar[0].image,
    });

    const changeAvatar = (userImage: string) => {
        setUserValues({ ...userValues, avatar: userImage });
    };

    const changeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserValues({ ...userValues, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(createUser(userValues));
    };

    return (
        <div className="signUp">
            <div className="overlay"
                onClick={closeForm} />
            <div className="authWrapper">
                <h2 className="signUp__title">Sign Up</h2>
                <div className="signUp__images">
                    {avatar.map((item) => (
                        <img
                            className={item.image === userValues.avatar
                                ? "signUp__currentImg"
                                : "signUp__Img"}
                            key={item.id}
                            src={item.image}
                            onClick={() => changeAvatar(item.image)}
                            alt="avatar" />
                    ))}
                </div>
                <form className="form signUp__form"
                    onSubmit={handleSubmit}>
                    <input
                        type="name"
                        placeholder="name"
                        name="name"
                        autoComplete="off"
                        required
                        onChange={changeValues} />
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        autoComplete="off"
                        required
                        onChange={changeValues} />
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        autoComplete="off"
                        required
                        onChange={changeValues} />
                    <button type="submit">Create an account</button>
                </form>
                {isError && <h2>Request error. Please try again</h2>}
                <h3
                    className="signUp__close"
                    onClick={() => changeFormType(FORM_TYPE.LOG_IN)}>I already have an account
                </h3>
            </div>
        </div>
    );
};

export default SignUpForm;