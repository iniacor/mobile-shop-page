import React, { useState } from 'react';
import { List } from '@mui/material';
import ProductCardItem from '../ProductCardItem/ProductCardItem';

type ProductType = {
  id: string;
  title: string;
  image: string;
  price: number;
  brand: string;
  description: string;
  link: string;
};

type ProductListProps = {
  productsList: ProductType[];
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
