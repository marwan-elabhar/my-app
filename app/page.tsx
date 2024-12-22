import { Product } from "@/components/Card";
import Card from "@/components/Card"

export default async function Home() {

  let isLoading = true
  let products: Product[] = []
  try {
    const response = await fetch('https://dummyjson.com/products')
    products = (await response.json()).products as Product[]
  } finally {
    isLoading = false
  }

  return (
    <div className="mt-4 w-[1200px] m-auto">
      <h1 className="text-2xl font-bold">Our Products</h1>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {isLoading ? Array.from({ length: 8 }).map((_, index) => {
          return <div className="w-64 h-[400px] bg-gray-300 rounded-md animate-pulse"></div>
        }
        ) :
          products.map(product => {
            return <Card product={product} key={product.id} />
          })
        }
      </div>
    </div>
  );
}





