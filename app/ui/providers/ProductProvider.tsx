// eslint-disable-next-line no-use-before-define
import React, { createContext, Dispatch, useReducer } from 'react'
import { IProductAction } from '../../data/actions/ProductActions'
import { ProductState, ProductReducer } from '../../data/reducers/ProductReducer'

export const initialState: ProductState = {
  productList: []
}

export type ProductContextData = {
  store: ProductState,
  productDispatch: Dispatch<IProductAction>
}

export const ProductContext = createContext<ProductContextData>({} as ProductContextData)

export default function ProductProvider (props: { children: React.ReactNode }) {
  const [productState, productDispatch] = useReducer(
    ProductReducer,
    initialState
  )

  return (
    <ProductContext.Provider value={{ store: productState, productDispatch }}>
      { props.children }
    </ProductContext.Provider>
  )
}
