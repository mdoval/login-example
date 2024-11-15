'use client'

import React, { useActionState } from "react";
import LoginButton from "./login-button";
import { login } from "@/lib/actions";
import Alert from "./alert";

const LoginForm = () => {
  const [data, handleSubmit, isPending ] = useActionState(login,null )

  return (
    <form action={handleSubmit}>
      <div className="flex flex-col p-6 border bg-gray-100 shadow-xl rounded-xl">
        <h1>Formulario de Login</h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="EJ. juan@example.com"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            <span className="label-text-alt text-red-600 font-bold">{data?.errors?.email}</span>
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
            required
          />
          <div className="label">
            <span className="label-text-alt text-red-600 font-bold">{data?.errors?.password}</span>
          </div>
        </label>
        {data?.error? <Alert mensaje={data.error} tipo="error" /> : ""}        
        <LoginButton />
      </div>
    </form>
  );
};

export default LoginForm;
