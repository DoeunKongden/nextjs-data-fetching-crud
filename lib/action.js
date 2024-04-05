'use server'
import { deleteProduct, insertNewProduct, updateProductById } from "@/service/product.service"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const insertProduct = async (formData) => {
    const productData = {
        product_name: formData?.get('productName'),
        price: formData?.get('productPrice'),
        image: formData?.get('productImg'),
    }
    await insertNewProduct(productData)
    revalidateTag('products')
    redirect("/")
}

export const deleteProductAction = async (product_id) => {
    await deleteProduct(product_id);
    revalidateTag('products');
}

export const updateProductAction = async (product_id, formData) => {
    const productData = {
        product_name: formData?.get('productName'),
        price: formData?.get('productPrice'),
        image: formData?.get('productImg'),
        quote: 'product quote',
        description: 'product description',
        rating: 40
    }
    await updateProductById(productData, product_id);
    revalidateTag('products');
    redirect("/")
}
