import { ProductContextData } from '../../ui/providers/ProductProvider'
import { Product } from '../reducers/ProductReducer'

export enum ProductActionTypes {
  PRODUCTS_REQUEST = 'PRODUCTS_REQUEST',
  PRODUCTS_RESPONSE = 'PRODUCTS_RESPONSE',
  PRODUCT_SELECT = 'PRODUCT_SELECT'
}

export type IProductAction = {
  type: ProductActionTypes,
  value?: any
}

export const productRequest = (): IProductAction => ({
  type: ProductActionTypes.PRODUCTS_REQUEST
})

export const productResponse = (value: any): IProductAction => ({
  type: ProductActionTypes.PRODUCTS_RESPONSE,
  value
})

export const productSelect = (value: Product | null): IProductAction => ({
  type: ProductActionTypes.PRODUCT_SELECT,
  value
})
