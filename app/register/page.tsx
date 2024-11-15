import React from 'react'
import RegisterForm from '../components/register-form'

const RegisterPage = () => {
  return (
    <div>
      <h1>Registro de Usuario</h1>
      <div className="flex w-1/3 justify-center">
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage