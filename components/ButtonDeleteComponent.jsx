'use client'
import { deleteProductAction } from "@/lib/action"


function ButtonDeleteComponent({ product_id }) {

    return (
        <form action={() => deleteProductAction(product_id)}>
            <button
                type="submit"
                className='btn bg-red-500 text-white hover:bg-red-300'>
                Delete Product
            </button>
        </form>
    )
}
export default ButtonDeleteComponent