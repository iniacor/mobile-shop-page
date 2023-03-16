import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Data from '../Data';
import ProductsList from '@components/productsList/ProductsList';
import SortField from '@components/sortField/SortField';
import FilterField from '@components/filterField/FilterField';
import type Product from '../entities/products';

type Handler = () => void;

const CategoryPage = () => {
  const [initialProductsList] = useState<Product[]>(Data);
  const [productsList, setProductsList] = useState<Product[]>(initialProductsList);
  const [openMobFilter, setopenMobFilter] = useState(false);

  const sortLowToHighHandler: Handler = () => {
    const sortedFromLowToHighPrice: Product[] = [...productsList];
    sortedFromLowToHighPrice.sort((a, b) => a.price - b.price);
    setProductsList(sortedFromLowToHighPrice);
  };
  const sortHighToLowHandler: Handler = () => {
    const sortedFromHighToLowPrice: Product[] = [...productsList];
    sortedFromHighToLowPrice.sort((a, b) => b.price - a.price);
    setProductsList(sortedFromHighToLowPrice);
  };
  return (
    <>
      <SortField
        onHighSort={sortLowToHighHandler}
        onLowSort={sortHighToLowHandler}
        openMobFilter={openMobFilter}
        setopenMobFilter={setopenMobFilter}
      />
      <Grid container>
        <Grid item xs={12} md={3} sx={{ pl: 0 }}>
          <FilterField
            initialProductsList={initialProductsList}
            setProductsList={setProductsList}
            openMobFilter={openMobFilter}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <ProductsList productsList={productsList} />
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryPage;
