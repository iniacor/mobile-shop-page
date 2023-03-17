import React, { useState, useCallback } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import RangeSlider from '@components/filterField/RangeSlider';
import InputMinPrice from '@components/buttons/InputMinPrice';
import InputMaxPrice from '@components/buttons/InputMaxPrice';
import ApplyButton from '@components/buttons/ApplyButton';
import MobileApplyButton from '@components/buttons/MobileApplyButton';
import ResetButton from '@components/buttons/ResetButton';
import * as Styled from './Accordions.styled';
import type Product from '../../entities/products';

import theme from '@theme/index';
type Handler = () => void;

type FilterByPriceAccordionProps = {
  initialProductsList: Product[];
  minPrice: number;
  maxPrice: number;
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  setProductsList: React.Dispatch<React.SetStateAction<Product[]>>;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  handleApplyFilter: Handler;
};

export default function FilterByPriceAccordion({
  initialProductsList,
  setSelectedBrands,
  setProductsList,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  handleApplyFilter,
}: FilterByPriceAccordionProps) {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleResetFilters = useCallback(() => {
    setSelectedBrands([]);
    setMinPrice(0);
    setMaxPrice(4000);
    setProductsList(initialProductsList);
  }, [initialProductsList, setSelectedBrands, setMinPrice, setMaxPrice, setProductsList]);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Styled.PriceAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <Styled.AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                display: 'none',
                [theme.breakpoints.between('md', 'lg')]: {
                  display: 'block',
                },
              }}
            />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Styled.AccordionTitle>Price range</Styled.AccordionTitle>
        </Styled.AccordionSummary>
        <MobileApplyButton handleApplyFilter={handleApplyFilter} />
        <Styled.AccordionDetails>
          <RangeSlider
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
          <Styled.InputPriceArea>
            <InputMinPrice
              value={minPrice}
              onChange={event => setMinPrice(Number(event.target.value))}
            />
            <InputMaxPrice
              value={maxPrice}
              onChange={event => setMaxPrice(Number(event.target.value))}
            />
          </Styled.InputPriceArea>
          <ApplyButton handleApplyFilter={handleApplyFilter} />
          <ResetButton onReset={handleResetFilters} />
        </Styled.AccordionDetails>
      </Styled.PriceAccordion>
    </div>
  );
}
