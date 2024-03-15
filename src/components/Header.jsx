import React from 'react'
import CartIcon from './CartIcon'


export default function Header({ cart }) {
    return (
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl semibol p-4'>React ve TailwindCSS Sepet Uygulaması</h1>
            <CartIcon cart={cart} />
        </div>
    )
}
