export enum CartActionTypes {
  CART_ADD_PRODUCT = 'CART_ADD_PRODUCT',
  CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT',
  CART_CLEAR = 'CART_CLEAR',
  CART_SHOP_REQUEST = 'CART_SHOP_REQUEST'
}

export type ICartAction = {
  type: CartActionTypes,
  value?: any
}

export const cartAddProduct = (value: any) => ({
  type: CartActionTypes.CART_ADD_PRODUCT,
  value
})

export const cartRemoveProduct = (value: any) => ({
  type: CartActionTypes.CART_REMOVE_PRODUCT,
  value
})

export const cartClear = () => ({
  type: CartActionTypes.CART_CLEAR
})

export const cartShopRequest = () => ({
  type: CartActionTypes.CART_SHOP_REQUEST
})
