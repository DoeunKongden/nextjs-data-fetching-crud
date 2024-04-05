

export const getAllProduct = async () => {
    const res = await fetch("https://6579da3c1acd268f9afa4236.mockapi.io/api/product",
        {
            cache: "no-store",
            next: { tags: ['products'] }
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    } else {
        return res.json()
    }
}

export const getProductById = async (product_id) => {
    const res = await fetch(`https://6579da3c1acd268f9afa4236.mockapi.io/api/product/${product_id}`,
        {
            cache: 'no-store',
            next: { tags: ['products'] }
        }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    } else {
        return res.json()
    }
}

export const insertNewProduct = async (product_data) => {
    const res = await fetch("https://6579da3c1acd268f9afa4236.mockapi.io/api/product", {
        method: 'POST',
        body: JSON.stringify(product_data),
        headers: {
            'content-type': 'application/json'
        }
    })
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    } else {
        return res.json()
    }
}

export const deleteProduct = async (product_id) => {
    const res = await fetch(`https://6579da3c1acd268f9afa4236.mockapi.io/api/product/${product_id}`, {
        method: 'DELETE',
    })
    if (!res.ok) {
        throw new Error("Failed to delete data");
    } else {

        return await res.json()
    }
}

export const updateProductById = async (productData, product_id) => {
    try {
        const res = await fetch(`https://6579da3c1acd268f9afa4236.mockapi.io/api/product/${product_id}`, {
            method: 'PUT',
            body: JSON.stringify(productData),
            headers: {
                'content-type': 'application/json'
            }
        })
        return res.json()
    } catch (error) {
        console.log("Update Error Service", error)
    }
}

export const getProductByName = async (product_name) => {
    const res = await fetch(`https://6579da3c1acd268f9afa4236.mockapi.io/api/product?product_name=${product_name}`,
        {
            cache: "no-store",
            next: {tags: ['products']}
        })
    if (!res.ok) {
        throw new Error("Failed to delete data");
    } else {
        return await res.json()
    }
}