import React, { useState, useMemo, useCallback } from 'react';
import { Box } from '@mui/material';
import FilterByBrandsAccordion from '@components/accordions/FilterByBrandsAccordion';
import FilterByPriceAccordion from '@components/accordions/FilterByPriceAccordion';
import type Product from '../../entities/products';
import * as Styled from './FilterField.styled';

type FilterFieldProps = {
  initialProductsList: Product[];
  setProductsList: React.Dispatch<React.SetStateAction<Product[]>>;
  openMobFilter: boolean;
};

const FilterField = ({ initialProductsList, setProductsList, openMobFilter }: FilterFieldProps) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minPrice, setMinPrice] = React.useState<number>(150);
  const [maxPrice, setMaxPrice] = React.useState<number>(3000);

  const filteredList = useMemo(() => {
    let filteredProducts: Product[] = [...initialProductsList];

    if (selectedBrands.length) {
      filteredProducts = filteredProducts.filter(product => selectedBrands.includes(product.brand));
    }

    filteredProducts = filteredProducts.filter(
      product => product.price >= minPrice && product.price <= maxPrice,
    );

    return filteredProducts;
  }, [initialProductsList, selectedBrands, minPrice, maxPrice]);

  const handleApplyFilter = useCallback(() => {
    const updatedList: Product[] = filteredList.length ? filteredList : initialProductsList;
    setProductsList(updatedList);
  }, [filteredList, initialProductsList, setProductsList]);

  return (
    <Styled.FilterField openMobFilter={openMobFilter}>
      <Box sx={{ mb: 2, width: '100%' }}>
        <Styled.Divider variant="middle" />
        <FilterByBrandsAccordion
          setSelectedBrands={setSelectedBrands}
          selectedBrands={selectedBrands}
          handleApplyFilter={handleApplyFilter}
        />
      </Box>
      <Styled.Divider variant="middle" />
      <FilterByPriceAccordion
        initialProductsList={initialProductsList}
        setSelectedBrands={setSelectedBrands}
        setProductsList={setProductsList}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        handleApplyFilter={handleApplyFilter}
      />
    </Styled.FilterField>
  );
};
export default FilterField;
