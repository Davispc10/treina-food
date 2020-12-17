export enum PlayerActionTypes {
  PRODUCTS_REQUEST = 'PRODUCTS_REQUEST',
  PRODUCTS_RESPONSE = 'PRODUCTS_RESPONSE',
  PRODUCT_SELECT = 'PRODUCT_SELECT'
}

export type IProductAction = {
  type: PlayerActionTypes,
  value?: any
}

export const productRequest = () => ({
  type: PlayerActionTypes.PRODUCTS_REQUEST
})

export const productResponse = (value: any) => ({
  type: PlayerActionTypes.PRODUCTS_RESPONSE,
  value
})

export const productSelect = (value: any) => ({
  type: PlayerActionTypes.PRODUCT_SELECT,
  value
})
