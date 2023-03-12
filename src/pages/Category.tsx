import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import ProductsList from '@components/productsList/ProductsList';
import BrandCheckboxGroupe from '@components/filterField/BrandCheckbox';
import RangeSlider from '@components/filterField/RangeSlider';
import InputMinPrice from '@components/buttons/InputMinPrice';
import InputMaxPrice from '@components/buttons/InputMaxPrice';
import ApplyButton from '@components/buttons/ApplyButton';
import ResetButton from '@components/buttons/ResetButton';
import SortField from '@components/sortField/SortField';

type ProductType = {
  id: string;
  title: string;
  image: string;
  price: number;
  brand: string;
  description: string;
  full_description: string;
  attributes: {
    category: string;
    type?: undefined;
    material?: undefined;
    design?: undefined;
  };
};

export const cardData = [
  {
    id: '1',
    title: 'HUAWEI P30 Lite 6/128GB Black',
    image: './images/HUAWEI-P30.png',
    price: 257,
    brand: 'Huawei',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ',
    full_description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
     ,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ,Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
     in reprehenderit ,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit `,
    attributes: [
      { category: 'Electronics' },
      { type: 'Mobile phone' },
      { material: 'Plastic' },
      { design: 'Modern' },
    ],
  },
  {
    id: '2',
    title: 'Huawei MatePad 10.4 4/128Gb Wi-Fi Grey',
    image: './images/Huawei-MatePad.png',
    price: 312,
    brand: 'Huawei',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ',
    full_description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
     ,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ,Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
     in reprehenderit ,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit `,
    attributes: [
      { category: 'Electronics' },
      { type: 'Tablet' },
      { material: 'Plastic' },
      { design: 'Modern' },
    ],
  },
  {
    id: '3',
    title: 'Apple Watch SE (2022) GPS 40mm Starlight ',
    image: './images/Apple-Watch-SE.png',
    price: 320,
    brand: 'Apple',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ',
    full_description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
     ,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ,Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
     in reprehenderit ,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit `,
    attributes: [
      { category: 'Electronics' },
      { type: 'Smart Watch' },
      { material: 'Aluminum' },
      { design: 'Modern' },
    ],
  },
  {
    id: '4',
    title: 'Apple iPhone 12 128GB Red',
    image: './images/Apple-iPhone-12.png',
    price: 804,
    brand: 'Apple',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    full_description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
     ,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ,Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
     in reprehenderit ,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit `,
    attributes: [
      { category: 'Electronics' },
      { type: 'Mobile phone' },
      { material: 'Aluminum' },
      { design: 'Modern' },
    ],
  },
  {
    id: '5',
    title: 'Laptop Apple MacBook Pro 16" M2 Pro 512GB 2023',
    image: './images/Laptop-Apple-MacBook-Pro.png',
    price: 2980,
    brand: 'Apple',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ',
    full_description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
     ,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ,Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
     in reprehenderit ,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit `,
    attributes: [
      { category: 'Electronics' },
      { type: 'Laptop' },
      { material: 'Aluminum' },
      { design: 'Modern' },
    ],
  },
];

const CategoryPage = () => {
  const [initialProductsList] = useState<ProductType[]>(cardData);
  const [productsList, setProductsList] = useState<ProductType[]>(initialProductsList);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(3000);

  const sortLowToHighHandler = () => {
    const sortedFromLowToHighPrice = [...initialProductsList];
    sortedFromLowToHighPrice.sort((a, b) => a.price - b.price);
    setProductsList(sortedFromLowToHighPrice);
  };
  const sortHighToLowHandler = () => {
    const sortedFromHighToLowPrice = [...initialProductsList];
    sortedFromHighToLowPrice.sort((a, b) => b.price - a.price);
    setProductsList(sortedFromHighToLowPrice);
  };

  const handleBrandChange = useCallback((brandName: string) => {
    setSelectedBrands(selectedBrands =>
      selectedBrands.includes(brandName)
        ? selectedBrands.filter(brand => brand !== brandName)
        : [...selectedBrands, brandName],
    );
  }, []);

  const filteredList = useMemo(() => {
    let filteredProducts = [...initialProductsList];

    if (selectedBrands.length) {
      filteredProducts = filteredProducts.filter(product => selectedBrands.includes(product.brand));
    }

    filteredProducts = filteredProducts.filter(
      product => product.price >= minPrice && product.price <= maxPrice,
    );

    return filteredProducts;
  }, [initialProductsList, selectedBrands, minPrice, maxPrice]);

  const handleApplyFilter = useCallback(() => {
    const updatedList = filteredList.length ? filteredList : initialProductsList;
    setProductsList(updatedList);
  }, [filteredList, initialProductsList]);

  const handleResetFilters = useCallback(() => {
    setSelectedBrands([]);
    setMinPrice(0);
    setMaxPrice(3000);
    setProductsList(initialProductsList);
  }, [initialProductsList]);

  return (
    <>
      <Grid container spacing={2}>
        <SortField onHighSort={sortLowToHighHandler} onLowSort={sortHighToLowHandler} />
        <Grid item xs={12} md={3} sx={{ pl: 0 }}>
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              backgroundColor: 'inherit',
            }}
          >
            <Box sx={{ mb: 2, width: '100%' }}>
              <Divider variant="middle" sx={{ mb: 2, ml: 0, mr: 0 }} />
              <Typography sx={{ mb: 2, fontWeight: '600' }}>Brands</Typography>
              <BrandCheckboxGroupe
                selectedBrands={selectedBrands}
                handleBrandChange={handleBrandChange}
              />
            </Box>
            <Divider variant="middle" sx={{ mb: 2, ml: 0, mr: 0, width: '100%' }} />
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography sx={{ mb: 2, fontWeight: '600' }}>Price range</Typography>
              <RangeSlider
                setMaxPrice={setMaxPrice}
                setMinPrice={setMinPrice}
                minPrice={minPrice}
                maxPrice={maxPrice}
              />
              <Box display="flex">
                <InputMinPrice
                  value={minPrice}
                  onChange={event => setMinPrice(Number(event.target.value))}
                />
                <InputMaxPrice
                  value={maxPrice}
                  onChange={event => setMaxPrice(Number(event.target.value))}
                />
              </Box>
              <ApplyButton handleApplyFilter={handleApplyFilter} />
              <ResetButton onReset={handleResetFilters} />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <ProductsList productsList={productsList} />
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryPage;
