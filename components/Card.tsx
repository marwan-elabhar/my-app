'use client'
import { useCart } from "../context/Cart";

export interface Product {
  id: number,
  title: string
  thumbnail: string
  price: number
  description: string
  quantity: number
}

export default function Card({ product }: { product: Product }) {

  const { addToCart } = useCart();

  const addItemToCart = () => {
    addToCart(product)
  }

  return (
    <div className="rounded border bg-white p-4 mt-3 shadow-lg transform transition-transform duration-300 hover:scale-105">
      <img src={product.thumbnail} alt="product-thumbnail" className="h-[254px]" />
      <h5 className="font-semibold">{product.title}</h5>
      <p className="mt-2 text-xs line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="font-semibold">${product.price}</p>
        <button onClick={addItemToCart} className="bg-blue-500 rounded-full w-[30px] h-[30px] text-white">+</button>
      </div>
    </div>
  )
}
