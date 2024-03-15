import React from 'react'
import { productData } from '../productData'

export default function ProductItem({ item, cart, setCart }) {


    const addToCart = () => {
        setCart((prevState) => [...prevState, item])
    }

    const findProduct = cart.find((cartItem) => cartItem.id === item.id)

    console.log(cart);

    return (
        <div className='border p-4 m-2 rounded-lg shadow-lg'>
            <img className='w-full h-48 object-cover rounded-t-lg' src={item.image} alt='product image' />
            <div className='p-4'>
                <h2 className='text-xl font-semibold'>{item.name}</h2>
                <p className='text-gray-500 my-4'>{item.price} TL</p>
                <button className='bg-blue-500 text-white w-full rounded px-4 hover:bg-blue-600 transition-colors py-2 disabled:bg-gray-200 disabled:text-gray-600 disabled:cursor-no-drop' disabled={findProduct} onClick={() => addToCart(item)}>Sepete Ekle</button>
            </div>
        </div>
    )
}
