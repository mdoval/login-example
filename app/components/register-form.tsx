'use client'

import React, { useActionState } from "react";
import Alert from "./alert";
import { register } from "@/lib/actions";
import RegisterButton from "./register-button";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [data, handleSubmit, isPending ] = useActionState(register,null )
  const router = useRouter()

  if(data?.success) {
    router.push('/login')
  }

  return (
    <form action={handleSubmit}>
      <div className="flex flex-col p-6 border bg-gray-100 shadow-xl rounded-xl">
        <h1>Formulario de Registro</h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Nombre</span>
          </div>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="EJ. Juan"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            <span className="label-text-alt text-red-600 font-bold">{data?.errors?.name}</span>
          </div>
        </label>


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
        {data?.error? <Alert mensaje={data.error} tipo="error"  /> : ""}        
        {data?.success? <Alert mensaje={"Usuario creado con exito"} tipo="success" /> : ""}        
        <RegisterButton />
      </div>
    </form>
  );
};

export default RegisterForm;
