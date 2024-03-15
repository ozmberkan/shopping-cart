import React from 'react'

export default function Cart({ cart, emptyCart }) {

    const total = cart.reduce((acc, item) => acc + item.price, 0)

    if (cart.length === 0) return null

    return (
        <div className='border rounded-lg shadow-lg w-72 ml-auto p-4 mt-2'>
            <h2 className='text-2xl font-semibold mb-4'>Sepet</h2>
            <ul>
                {cart.map((item) => (
                    <li className='mt-2 flex justify-between items-center' key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.price} TL</span>
                    </li>
                ))}
            </ul>
            <hr className='my-4' />
            <p className='font-semibold text-xl'>Toplam : {total}</p>
            <button className='bg-red-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-red-600 transition-colors' onClick={emptyCart}>Sepeti Boşalt</button>
        </div>
    )
}
