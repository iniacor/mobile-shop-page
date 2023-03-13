import React, { useState } from 'react';
import { List } from '@mui/material';
import ProductCardItem from '../ProductCardItem/ProductCardItem';
import type Product from '../../entities/products';

type ProductListProps = {
  productsList: Product[];
};

const ProductsList = ({ productsList }: ProductListProps) => {
  return (
    <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {productsList.map(card => (
        <ProductCardItem key={card.id} {...card} />
      ))}
    </List>
  );
};

export default ProductsList;
