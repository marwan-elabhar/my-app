'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '@/components/Card';

interface CartContextType {
    cart: Product[];
    addToCart: (item: Product) => void;
    removeFromCart: (id: number) => void;
    decreaseProductQuantity: (id: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (item: Product) => {
        setCart((cart) => {

            const existingItem = cart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return cart.map((cartItem) => {
                    if (cartItem.id === item.id) {
                        return {
                            ...cartItem,
                            quantity: item.quantity + cartItem.quantity
                        }
                    }
                    return cartItem
                }

                );
            }


            return [...cart, item];
        });
    };

    const decreaseProductQuantity = (id: number) => {
        setCart((cart) => {
            const cartItem = cart.find(item => item.id === id)
            if (cartItem?.quantity === 1) removeFromCart(id)
            return cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
                return item
            })
        })
    }

    const removeFromCart = (id: number) => {
        setCart((cart) => {
            return cart.filter(item => item.id !== id)
        })
    }

    const clearCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseProductQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = (): CartContextType => {
    'use client'

    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};  