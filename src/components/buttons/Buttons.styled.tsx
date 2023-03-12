import React from 'react';
import { Button as MuiButton, Typography as MuiTypography } from '@mui/material';
import styled from 'styled-components';
import theme from '@theme/index';

export const ApplyButton = styled(props => (
  <MuiButton variant="outlined" aria-label="show filtered products" {...props} />
))`
  width: 76px;
  height: 40px;
  background: #fff;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 1px solid #dee2e7;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
`;

export const ResetButton = styled(props => (
  <MuiButton variant="text" aria-label="reset filter" {...props} />
))`
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
