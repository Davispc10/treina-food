import React, { createContext, Dispatch, useReducer } from 'react'
import { ICartAction } from '../../data/actions/CartActions'
import { CartReducer, CartState } from '../../data/reducers/CartReducer'

export const initialState: CartState = {
  products: []
}

export type CartContextData = {
  store: CartState,
  cartDispatch: Dispatch<ICartAction>
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export default function CartProvider (props: { children: React.ReactNode }) {
  const [cartState, cartDispatch] = useReducer(CartReducer, initialState)

  return (
    <CartContext.Provider value={{ store: cartState, cartDispatch }}>
      { props.children }
    </CartContext.Provider>
  )
}
