import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import theme from '@theme/index';

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
        sx={{
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            margin: 0,
          },
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Apple')}
            onChange={() => handleBrandChange('Apple')}
          />
        }
        label="Apple"
        sx={{
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            margin: 0,
          },
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Huawei')}
            onChange={() => handleBrandChange('Huawei')}
          />
        }
        label="Huawei"
        sx={{
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            margin: 0,
          },
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Pocco')}
            onChange={() => handleBrandChange('Pocco')}
          />
        }
        label="Pocco"
        sx={{
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            margin: 0,
          },
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={selectedBrands.includes('Lenovo')}
            onChange={() => handleBrandChange('Lenovo')}
          />
        }
        label="Lenovo"
        sx={{
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            margin: 0,
          },
        }}
      />
    </FormGroup>
  );
}
