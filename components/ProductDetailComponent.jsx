

function ProductDetailComponent({ product_name, product_img, product_price }) {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={product_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product_name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price : {product_price}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailComponent