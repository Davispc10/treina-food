import React, { useEffect, useContext } from 'react'
import { Appbar, Card, Button, Paragraph } from 'react-native-paper'
import { ScrollView } from 'react-native'
import { ApiService } from '../../../data/services/ApiService'
import { ProductContext } from '../../providers/ProductProvider'
import { productResponse, productSelect } from '../../../data/actions/ProductActions'
import { ProductCard, ViewContainer } from './styles'
import { Product } from '../../../data/reducers/ProductReducer'
import { NumberService } from '../../../data/services/NumberService'
import ProductDetail from '../ProductDetail'

const ProductsView: React.FC = (props: any) => {
  const { store, productDispatch } = useContext(ProductContext)

  useEffect(() => {
    async function loadProducts () {
      const response = await ApiService.get('products')

      productDispatch(productResponse(response))
    }

    loadProducts()
  }, [])

  function selectProduct (product: Product| null) {
    productDispatch(productSelect(product))
  }

  if (store.selectedProduct) {
    return (
      <ViewContainer>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => selectProduct(null) } />
          <Appbar.Content title={store.selectedProduct.name}/>
        </Appbar.Header>

        <ProductDetail />
      </ViewContainer>
    )
  }

  return (
    <ViewContainer>
      <Appbar.Header>
        <Appbar.Content title={'Produtos'} subtitle={'Lista de produtos'}/>
      </Appbar.Header>

      <ScrollView>
        {store.productList.map((product: Product) => (
          <ProductCard key={product.id}>
            <Card.Cover source={{ uri: product.picture }} />
            <Card.Title
              title={product.name}
              right={
                () => <Button onPress={() => selectProduct(product)}>Selecionar</Button>
              }
            />
            <Card.Content>
              <Paragraph>
                {NumberService.currency(product.price)}
              </Paragraph>
            </Card.Content>
          </ProductCard>
        ))}
      </ScrollView>
    </ViewContainer>
  )
}

export default ProductsView
