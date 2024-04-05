import ProductCardComponent from "@/components/ProductCardComponent";
import { getAllProduct } from "@/service/product.service";
import Link from "next/link";


export default async function Home() {
  const productData = await getAllProduct();
  return (
    <main className="min-h-screen px-24">
      <div className="flex items-center justify-between">
        <h1 className="font-mono text-3xl font-bold py-10">List Of All Product</h1>
        <Link href={'/addProduct'}><button className="btn btn-primary">Add New Product</button></Link>
      </div>
      <div className="pt-10 grid grid-cols-4 gap-10">
        {
          productData?.map((item) => {
            return (
              <ProductCardComponent
                key={item.id}
                product_id={item.id}
                product_name={item.product_name}
                product_img={item.image}
                product_price={item.price} />
            )
          })
        }
      </div>
    </main>
  );
}
