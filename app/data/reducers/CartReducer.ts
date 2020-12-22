import { CartActionTypes, ICartAction } from '../actions/CartActions'

export type Product = {
  id: string
  picture: string
  name: string
  price: number,
  options: string[]
}

export type CartState = {
  products: Product[];
}

export const CartReducer = (state: CartState, action: ICartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.CART_ADD_PRODUCT:
      return { ...state, products: [...state.products, action.value] }
    case CartActionTypes.CART_REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(item => item !== action.value)
      }
    case CartActionTypes.CART_CLEAR:
      return { ...state, products: [] }

    default: return state
  }
}
