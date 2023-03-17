import React, { useState, useCallback } from 'react';
import { AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import BrandCheckboxGroupe from '@components/filterField/BrandCheckbox';
import MobileApplyButton from '@components/buttons/MobileApplyButton';
import theme from '@theme/index';
import * as Styled from './Accordions.styled';
type Handler = () => void;

type FilterByBrandAccordionProps = {
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  handleApplyFilter: Handler;
};

export default function FilterByBrandsAccordion({
  setSelectedBrands,
  selectedBrands,
  handleApplyFilter,
}: FilterByBrandAccordionProps) {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleBrandChange = useCallback(
    (brandName: string) => {
      setSelectedBrands(selectedBrands =>
        selectedBrands.includes(brandName)
          ? selectedBrands.filter(brand => brand !== brandName)
          : [...selectedBrands, brandName],
      );
    },
    [setSelectedBrands],
  );

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Styled.BrandsAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
          <Styled.AccordionTitle>Brands</Styled.AccordionTitle>
        </Styled.AccordionSummary>
        <MobileApplyButton handleApplyFilter={handleApplyFilter} />
        <AccordionDetails sx={{ padding: '8px 0px 16px' }}>
          <BrandCheckboxGroupe
            selectedBrands={selectedBrands}
            handleBrandChange={handleBrandChange}
          />
        </AccordionDetails>
      </Styled.BrandsAccordion>
    </div>
  );
}
