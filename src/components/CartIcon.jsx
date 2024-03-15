import React from 'react'
import { FiShoppingCart } from "react-icons/fi";


export default function CartIcon({ cart }) {




    return (
        <div className='p-2  rounded-full bg-transparent hover:bg-zinc-100 transition-colors duration-300 relative'>
            <FiShoppingCart className='cursor-pointer  text-2xl' />
            {cart.length > 0 && <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 '>{cart.length}</span>}

        </div >
    )
}
