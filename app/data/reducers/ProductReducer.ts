import { IProductAction, ProductActionTypes } from '../actions/ProductActions'

export type Product = {
  id: string
  picture: string
  name: string
  price: number,
  options: string[]
}

export type ProductState = {
  productList: Product[];
  selectedProduct?: Product | null;
}

export const ProductReducer = (state: ProductState, action: IProductAction): ProductState => {
  switch (action.type) {
    case ProductActionTypes.PRODUCTS_RESPONSE:
      return { ...state, productList: action.value }
    case ProductActionTypes.PRODUCT_SELECT:
      return { ...state, selectedProduct: action.value }
    default: return state
  }
}
