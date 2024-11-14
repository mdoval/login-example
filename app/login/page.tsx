import React from "react";
import LoginForm from "../components/login-form";

const LoginPage = () => {
  return (
    <div>
      <h1>Pagina de Login</h1>
      <div className="flex w-1/3 justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
