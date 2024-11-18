'use client'

import Link from 'next/link'
import React from 'react'

const LoginButton = () => {
  return (
    <Link className="btn btn-primary" href={"/login"}>Login</Link>
  )
}

export default LoginButton