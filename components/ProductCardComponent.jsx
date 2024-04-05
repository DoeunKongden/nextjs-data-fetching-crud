import Link from 'next/link'
import React from 'react'
import ButtonDeleteComponent from './ButtonDeleteComponent'

const ProductCardComponent = async ({ product_name, product_img, product_price, product_id }) => {
    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src={product_img} alt="Shoes" height={200} width={200} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p>{product_price} <span className='font-bold text-lg'>$</span></p>
                    <div className="card-actions justify-end">
                        <Link href={`/${product_id}`}><button className="btn btn-primary">View Product</button></Link>
                        <ButtonDeleteComponent product_id={product_id} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardComponent