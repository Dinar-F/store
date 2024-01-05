import Header from "../Header/Header";
import AuthForm from "../User/AuthForm";
import InfoBlock from "../InfoBlock/InfoBlock";
import Content from "../Content/Content";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getProfile } from "../../store/user/profileAcyncActions";
import "./app.scss";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <AuthForm />
      <InfoBlock />
      <Content />
    </div>
  );
}

export default App;
