import React from 'react';
import { FormGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import * as Styled from './FilterField.styled';

type BrandCheckboxGroupeProps = {
  selectedBrands: string[];
  handleBrandChange: (brandName: string) => void;
};

export default function BrandCheckboxGroupe({
  selectedBrands,
  handleBrandChange,
}: BrandCheckboxGroupeProps) {
  return (
    <FormGroup>
      <Styled.FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Samsung')}
            onChange={() => handleBrandChange('Samsung')}
            sx={{ color: '#BDBDBD' }}
          />
        }
        label="Samsung"
      />
      <Styled.FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Apple')}
            onChange={() => handleBrandChange('Apple')}
            sx={{ color: '#BDBDBD' }}
          />
        }
        label="Apple"
      />
      <Styled.FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Huawei')}
            onChange={() => handleBrandChange('Huawei')}
            sx={{ color: '#BDBDBD' }}
          />
        }
        label="Huawei"
      />
      <Styled.FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Pocco')}
            onChange={() => handleBrandChange('Pocco')}
            sx={{ color: '#BDBDBD' }}
          />
        }
        label="Pocco"
      />
      <Styled.FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Lenovo')}
            onChange={() => handleBrandChange('Lenovo')}
            sx={{ color: '#BDBDBD' }}
          />
        }
        label="Lenovo"
      />
    </FormGroup>
  );
}
