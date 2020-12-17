import React, { useEffect, useContext, useState } from 'react'
import styled from 'styled-components/native'
import { Appbar, Card, Button, Paragraph } from 'react-native-paper'
import { ScrollView } from 'react-native'
import { ApiService } from '../../../data/services/ApiService'
import { ProductContext } from '../../providers/ProductProvider'
import { productResponse } from '../../../data/actions/ProductActions'

const ViewContainer = styled.SafeAreaView`
  flex: 1;
`

const ProductCard = styled(Card)`
  margin: 8px;
`

interface IProduct {
  id: string
  picture: string
  title: string
  price: number
}

export default function ProductsView (props: any) {
  const { store, productDispatch } = useContext(ProductContext)
  const [produtos, setProdutos] = useState<IProduct[]>([])

  useEffect(() => {
    async function loadProducts () {
      const response = await ApiService.get('products')

      productDispatch(productResponse(response))
      // setProdutos(response)
      // console.log(productList)
    }

    loadProducts()
  }, [])

  return (
    <ViewContainer>
      <Appbar.Header>
        <Appbar.Content title={'Produtos'} subtitle={'Lista de produtos'}/>
      </Appbar.Header>

      <ScrollView>
        {/* {productList} */}
        {/* {productList.map((product: IProduct) => (
          <ProductCard key={product.id}>
            <Card.Cover source={{ uri: product.picture }} />
            <Card.Title title={product.title} right={() => <Button>Selecionar</Button>}/>
            <Card.Content>
              <Paragraph>
                {product.price}
              </Paragraph>
            </Card.Content>
          </ProductCard>
        ))} */}
      </ScrollView>
    </ViewContainer>
  )
}
