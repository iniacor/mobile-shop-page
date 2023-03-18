import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '@components/productCard';
import data from '../common/data/data';
import type Product from '../entities/products';

const ProductCardPage = () => {
  const { id } = useParams();
  const currentData: Product | undefined = data.find(item => item.id === id);

  if (!currentData) {
    return null;
  }

  return <ProductCard {...currentData} />;
};

export default ProductCardPage;
