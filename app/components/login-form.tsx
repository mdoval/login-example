import React from "react";
import LoginButton from "./login-button";

const LoginForm = () => {
  return (
    <form>
      <div className="flex flex-col p-6 border bg-gray-100 shadow-xl rounded-xl">
        <h1>Formulario de Login</h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            id="email"
            name="emai"
            type="email"
            placeholder="EJ. juan@example.com"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            <span className="label-text-alt">Error</span>
          </div>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Contraseña</span>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="EJ. juan@example.com"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            <span className="label-text-alt">Error</span>
          </div>
        </label>

        <LoginButton />
      </div>
    </form>
  );
};

export default LoginForm;
