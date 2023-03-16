import React from 'react';
import {
  Button as MuiButton,
  IconButton as MuiIconButton,
  Typography as MuiTypography,
} from '@mui/material';
import styled from 'styled-components';

export const ApplyButton = styled(props => (
  <MuiButton variant="outlined" aria-label="show filtered products" {...props} />
))`
  display: block;
  width: 76px;
  height: 40px;
  background: #fff;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 1px solid #dee2e7;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  ${props => props.theme.breakpoints.down('sm')} {
    display: none;
  }
`;

export const MobileApplyButton = styled(props => (
  <MuiButton variant="text" aria-label="show filtered products" {...props} />
))`
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 76px;
  height: 40px;
  background: transparent;
  margin: 0 auto;
  margin-bottom: 20px;
  border: none;
  box-shadow: none;
  ${props => props.theme.breakpoints.up('sm')} {
    display: none;
  }
`;

export const ResetButton = styled(props => (
  <MuiButton variant="text" aria-label="reset filter" {...props} />
))`
  display: block;
  width: auto;
  height: 40px;
  background: inherit;
  box-shadow: none;
`;

export const BuyButton = styled(props => (
  <MuiButton variant="contained" aria-label="buy button" {...props} />
))`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: none;
`;

export const LowSortButton = styled(props => (
  <MuiButton variant="outlined" aria-label="sort button from low to high" {...props} />
))`
  padding: 5px 10px;
  margin-right: ${({ theme }) => theme.spacing(1)};
  border-radius: 6px;
  border: 1px solid #dee2e7;
  ${props => props.theme.breakpoints.down('sm')} {
    padding: 0;
  }
`;

export const HighSortButton = styled(props => (
  <MuiButton variant="outlined" aria-label="sort button from high to low" {...props} />
))`
  padding: 5px 10px;
  margin-right: ${({ theme }) => theme.spacing(1)};
  border-radius: 6px;
  border: 1px solid #dee2e7;
  ${props => props.theme.breakpoints.down('sm')} {
    padding: 0;
  }
`;

export const SortButtonText = styled(props => <MuiTypography variant="button" {...props} />)`
  text-transform: none;
  font-size: 1rem;
  margin-right: 18px;
  color: ${({ theme }) => theme.palette.text.secondary};
  ${props => props.theme.breakpoints.down('sm')} {
    margin-right: ${({ theme }) => theme.spacing(0.3)};
    font-size: 0.81rem;
    padding: 3px 0;
  }
`;

export const CloseButton = styled(props => (
  <MuiIconButton variant="outlined" aria-label="close button" {...props} />
))`
  display: inline-flex;
  width: 28px;
  height: 30px;
  background: transparent;
  margin: 0 auto;
  border: 1px solid #dee2e7;
  border-radius: 6px;
  ${props => props.theme.breakpoints.up('sm')} {
    display: none;
  }
`;

export const FilterMobileButton = styled(props => (
  <MuiIconButton variant="outlined" aria-label="close button" {...props} />
))`
  display: inline-flex;
  width: 28px;
  height: 30px;
  background: transparent;
  margin: 0 auto;
  border: 1px solid #dee2e7;
  border-radius: 6px;
  ${props => props.theme.breakpoints.up('sm')} {
    display: none;
  }
`;
