import React, { createContext, Dispatch, useReducer } from 'react'
import { IProductAction } from '../../data/actions/ProductActions'
import { Product, ProductReducer } from '../../data/reducers/ProductReducer'

interface IState {
  productList: Product[],
  selectedProduct?: Product
}

export const initialState: IState = {
  productList: []
}

// export type ProductContextData = {
//   store: ProductContext,
//   productDispatch: Dispatch<IProductAction>
// }

// export const ProductListContext = createContext<ProductContextData | undefined>(undefined)

export const ProductListState = createContext<Dispatch<typeof initialState> | undefined>(undefined)

// export const ProductListDispatch = React.createContext<Dispatch<IProductAction> | undefined>(undefined)

export default function ProductProvider (props: { children: React.ReactNode }) {
  const [productState, productDispatch] = useReducer(ProductReducer, initialState)

  // const combinedReducers: ProductContextData = {
  //   store: {
  //     ...productState
  //   },
  //   productDispatch
  // }

  return (
    <ProductListState.Provider value={{ state: productState, productDispatch }}>
      {props.children}
    </ProductListState.Provider>
  )
}
