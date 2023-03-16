import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '@components/productCard/ProductCard';
import Data from '../Data';
import type Product from '../entities/products';

const ProductCardPage = () => {
  const { id } = useParams();
  const currentData: Product | undefined = Data.find(item => item.id === id);

  if (!currentData) {
    return null;
  }

  return <ProductCard {...currentData} />;
};

export default ProductCardPage;
