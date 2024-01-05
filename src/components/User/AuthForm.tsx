import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useEffect } from "react";
import { toggleForm, toggleFormType } from "../../store/user/userSlice";
import { getProfile } from "../../store/user/profileAcyncActions";
import { FORM_TYPE } from "../../constants";

const AuthForm = () => {
    const dispatch = useAppDispatch();
    const { showForm, showFormType, logIn: { isAuth } } = useAppSelector((state) => state.user);

    useEffect(() => {
        if (isAuth) {
            dispatch(getProfile());
        }
    }, [isAuth, dispatch]);


    const closeForm = () => {
        dispatch(toggleForm(false));
    };

    const changeFormType = (type: string) => {
        dispatch(toggleFormType(type));
    };

    return showForm ? (
        <>
            {showFormType === FORM_TYPE.LOG_IN ? (
                <LogInForm
                    changeFormType={changeFormType}
                    closeForm={closeForm}
                />
            ) : (
                <SignUpForm
                    changeFormType={changeFormType}
                    closeForm={closeForm}
                />
            )}
        </>
    ) : (null);
};

export default AuthForm;