import React, { useState, useMemo, useCallback } from 'react';
import { Box, Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import theme from '@theme/index';
import type Product from '../../entities/products';
import FilterByBrandsAccordion from '@components/accordions/FilterByBrandsAccordion';
import FilterByPriceAccordion from '@components/accordions/FilterByPriceAccordion';

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
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: 'inherit',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column-reverse',
          display: openMobFilter ? 'flex' : 'none',
        },
      }}
    >
      <Box sx={{ mb: 2, width: '100%' }}>
        <Divider
          variant="middle"
          sx={{
            mb: 2,
            ml: 0,
            mr: 0,
            [theme.breakpoints.down('sm')]: {
              display: 'none',
            },
          }}
        />
        <FilterByBrandsAccordion
          setSelectedBrands={setSelectedBrands}
          selectedBrands={selectedBrands}
          handleApplyFilter={handleApplyFilter}
        />
      </Box>
      <Divider variant="middle" sx={{ mb: 2, ml: 0, mr: 0, width: '100%' }} />
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
    </Paper>
  );
};
export default FilterField;
