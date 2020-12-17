// eslint-disable-next-line no-use-before-define
import React, { createContext, Dispatch, useReducer } from 'react'
import { IProductAction } from '../../data/actions/ProductActions'
import { IProductState, ProductReducer } from '../../data/reducers/ProductReducer'

export const initialState: IProductState = {
  productList: []
}

export type ProductContextData = {
  store: IProductState,
  productDispatch: Dispatch<IProductAction>
}

// export const ProductListContext = createContext<ProductContextData | undefined>(undefined)

export const ProductListState = createContext<ProductContextData | undefined>(undefined)

// export const ProductListDispatch = React.createContext<Dispatch<IProductAction> | undefined>(undefined)

export default function ProductProvider (props: { children: React.ReactNode }) {
  const [productState, productDispatch] = useReducer(
    ProductReducer,
    initialState
  )

  // const combinedReducers: ProductContextData = {
  //   store: {
  //     ...productState
  //   },
  //   productDispatch
  // }

  return (
    <ProductListState.Provider value={{ store: productState, productDispatch }}>
      {props.children}
    </ProductListState.Provider>
  )
}
