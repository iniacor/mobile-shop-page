import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function BrandCheckboxGroupe({ selectedBrands, handleBrandChange }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Samsung')}
            onChange={() => handleBrandChange('Samsung')}
          />
        }
        label="Samsung"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Apple')}
            onChange={() => handleBrandChange('Apple')}
          />
        }
        label="Apple"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Huawei')}
            onChange={() => handleBrandChange('Huawei')}
          />
        }
        label="Huawei"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Pocco')}
            onChange={() => handleBrandChange('Pocco')}
          />
        }
        label="Pocco"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Lenovo')}
            onChange={() => handleBrandChange('Lenovo')}
          />
        }
        label="Lenovo"
      />
    </FormGroup>
  );
}
