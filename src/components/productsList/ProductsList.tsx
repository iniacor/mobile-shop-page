import React from 'react';
import ProductCardItem from '../productCardItem/ProductCardItem';
import type Product from '../../entities/products';
import * as Styled from './ProductsList.styled';

type ProductListProps = {
  productsList: Product[];
};

const ProductsList = ({ productsList }: ProductListProps) => {
  return (
    <Styled.ProductsList>
      {productsList.map(card => (
        <ProductCardItem key={card.id} {...card} />
      ))}
    </Styled.ProductsList>
  );
};

export default ProductsList;
