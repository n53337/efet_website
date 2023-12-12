import React from 'react'
import LoginForm from './LoginForm'
import loginSvg from "../assets/login.svg"

export default function LoginPage() {
  return (
    <main className='w-screen h-screen bg-gray-200 flex justify-center'>

        <div className='container w-screen h-screen flex'>

        {/* SVG */}
        <section className='flex-1 h-full hidden xl:flex'>
            <div className='flex justify-center items-center h-full'>
                <img src={loginSvg} alt="Login Image" width="80%" />
            </div>
        </section>

        {/* Login Form */}
        <section className='flex-1 w-full h-full md:p-12'>
            <LoginForm/>
        </section>

        </div>
    </main>
  )
}
