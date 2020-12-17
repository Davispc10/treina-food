import { IProductAction, PlayerActionTypes } from '../actions/ProductActions'
// import { ProductContext } from '../../ui/providers/ProductProvider'

export type Product = {
  id: string
  picture: string
  title: string
  price: number
}

export const ProductReducer = (state: Product, action: IProductAction) => {
  switch (action.type) {
    case PlayerActionTypes.PRODUCTS_RESPONSE:
      return { ...state, productList: action.value }
    case PlayerActionTypes.PRODUCT_SELECT:
      return { ...state, selectedProduct: action.value }
    default: return state
  }
}
