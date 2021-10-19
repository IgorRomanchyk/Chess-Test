import React from "react-router-dom";
import { useState } from "react";
import history from "../history/history";

import useAuth from "../auth/useAuth";

export const passwordArr = JSON.parse(localStorage.getItem("password") || "[]");

const Home = () => {
  const [password, setPassword] = useState<string | number>("");

  const onInputChange = (e: any) => {
    const { value } = e.target;
    setPassword(value);
  };
  const auth = useAuth();
  const onAddClick = () => {
    if (password === "1111") {
      passwordArr.push(password);
      localStorage.setItem("password", JSON.stringify(passwordArr));
      auth.signIn();
      history.push("/test");
      setPassword("");
    } else {
      setPassword("");
      alert("неверно");
    }
  };
  return (
    <div className="home">
      {auth.checkAuth || passwordArr.length ? null : (
        <div>
          <input type="text" value={password} onChange={onInputChange} />
        </div>
      )}
      <button
        className="button_open registration"
        type="button"
        onClick={onAddClick}
      >
        {auth.checkAuth || passwordArr.length ? (
          <p>Начать тест</p>
        ) : (
          <p>Регистрация</p>
        )}
      </button>
    </div>
  );
};

export default Home;
