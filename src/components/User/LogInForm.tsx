import Spinner from "../Spinner/Spinner";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { logInUser } from "../../store/user/userAcyncActions";
import { FORM_TYPE } from "../../constants";
import { AuthProps, AuthValues } from "../../types/userTypes";
import "./user.scss";

const LogInForm: React.FC<AuthProps> = ({ closeForm, changeFormType }) => {
    const dispatch = useAppDispatch();
    const { logIn } = useAppSelector((state) => state.user);

    const [logInValues, setLogInValues] = useState<AuthValues>({
        email: "",
        password: "",
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(logInUser(logInValues));
    };

    const changeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogInValues({ ...logInValues, [event.target.name]: event.target.value });
    };

    return (
        <div className="logIn">
            <div className="overlay"
                onClick={closeForm} />
            <div className="authWrapper">
                <h2 className="logIn__title">Log In</h2>
                <form className="form logIn__form"
                    onSubmit={handleSubmit}>
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
                    <button type="submit">Log In</button>
                </form>
                <h3
                    className="logIn__create"
                    onClick={() => changeFormType(FORM_TYPE.SIGN_IN)}>Create an account</h3>
                {logIn.isLoading && <Spinner />}
                {logIn.isError &&
                    <div>Authorisation Error</div>}
            </div>
        </div>
    );
};

export default LogInForm;