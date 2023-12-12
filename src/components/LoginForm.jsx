import React from 'react'
import efetImg from '../assets/logo-efet.png'
import Toggle from 'react-toggle'

export default function LoginForm() {
  return (
    <div className='bg-white h-full rounded-xl shadow-2xl px-4 py-8 md:px-16 md:py-16 flex flex-col justify-between'>
        <form className='flex flex-col items-center'>
            <div className='flex items-center justify-center pb-6'>
                <img src={efetImg} alt="efet logo" title='efet logo' width="70%" height="70%"/>
            </div>

            <div className='flex flex-col items-center justify-center gap-2'>
                <h2 className='text-3xl font-medium'>Content de te revoir !</h2>
                <p className='text-gray-600 text-base'>Veuillez entrer vos coordonnées</p>
            </div>

            <div className='pt-6 flex flex-col w-full gap-4'>
                <input type='text'  placeholder='username' className='p-4 text-neutral-900 border-2 rounded-lg border-neutral-500 focus:border-blue-600 placeholder:text-neutral-500'/>
                <input type='password'  placeholder='password' className='p-4 text-neutral-900 border-2 rounded-lg border-neutral-500 focus:border-blue-600 placeholder:text-neutral-500'/>
                <div className='flex justify-between items-center pb-4'>
                    <div className='flex gap-2'>
                        <input type='checkbox' className='p-4'/>
                        <p>souviens-toi de moi</p>
                    </div>
                    <a href='#' className='text-blue-700'>Mot de passe oublié?</a>
                </div>
                <button className='bg-blue-800 rounded-lg py-4 text-white font-semibold'>Se connecter</button>
            </div>
        </form>

        <div className='flex justify-center'>
            <span>
                Made with 🖤 by <a href='https://github.com/n53337' target='_blank' className='text-blue-800'>usef</a>
            </span>
        </div>
    </div>
  )
}
