import React from 'react'
import ProductItem from './ProductItem'
import { productData } from '../productData'


export default function Products({ cart, setCart }) {
    return (
        <div className='grid grid-cols-3 gap-10 mb-8'>
            {productData.map((item) => (
                <ProductItem key={item.id} item={item} cart={cart} setCart={setCart} />
            ))}
        </div>
    )
}
