import ProductDetailComponent from "@/components/ProductDetailComponent"
import { updateProductAction } from "@/lib/action"
import { getProductById } from "@/service/product.service"


const page = async ({ params }) => {
    const product = await getProductById(params.product_id);
    const updateProductById = updateProductAction.bind(null, params.product_id);
    return (
        <div className="min-h-screen px-24 flex justify-center gap-x-20 items-center">
            <ProductDetailComponent
                product_img={product.image}
                product_name={product.product_name}
                product_price={product.price}
            />
            <div className="w-[400px]">
                <h1 className="font-mono text-center font-bold pb-5">Edit Product Form</h1>
                <form action={updateProductById} className="flex flex-col gap-y-6">
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            name="productName"
                            id="productName"
                            className="grow" placeholder="Product Name" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            name="productPrice"
                            id="productPrice"
                            className="grow"
                            placeholder="Product Price" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            name="productImg"
                            id="productImg"
                            className="grow"
                            placeholder="Product Image Link" />
                    </label>

                    <button type="submit" className="btn w-32 text-white btn-info">Edit Product</button>
                </form>
            </div>
        </div>
    )
}

export default page