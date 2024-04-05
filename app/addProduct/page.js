import { insertProduct } from "@/lib/action";

export default function AddProductPage() {
    return (
        <div className="h-fit flex justify-center items-center">
            <form className="w-[300px] flex flex-col gap-y-5" action={insertProduct}>
                <h1 className="text-center font-mono font-semibold text-lg">Add New Product Form</h1>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" name="productName" id="productName" className="grow" placeholder="Product Name" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" name="productPrice" id="productPrice" className="grow" placeholder="Product Price" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" name="productImg" id="productImg" className="grow" placeholder="Product Image Link" />
                </label>

                <button type="submit" className="btn btn-info">Add Product</button>
            </form>
        </div>
    )
}