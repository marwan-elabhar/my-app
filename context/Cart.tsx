'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '@/components/Card';

interface CartContextType {
    cart: Product[];
    addToCart: (item: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (item: Product) => {
        setCart((cart) => {
            const existingItem = cart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return cart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            }

            return [...cart, item];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((cart) => {
           return cart.filter((cartItem) => cartItem.id !== id)
        })
    }

    const clearCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
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