import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import styled from 'styled-components';

export const ProductCardItem = styled(props => <Card {...props} />)`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 0;
  border: 1px solid #dee2e7;
`;

export const ProductImage = styled(props => <CardMedia component="img" {...props} />)`
  max-width: 100%;
  width: auto;
`;

export const ProductContent = styled(CardContent)`
  flex: 1;
  min-width: 0;
  ${props => props.theme.breakpoints.down('sm')} {
    padding: 13px;
  }
`;

export const ProductImageWrapper = styled(Box)`
  width: 210px;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.theme.breakpoints.down('sm')} {
    width: 100px;
    height: 100px;
  }
`;

export const ProductTitle = styled(props => (
  <Typography variant="h6" component="h3" noWrap {...props} />
))`
  font-weight: 500;
  color: #1c1c1c;
  margin-bottom: 16px;
  ${props => props.theme.breakpoints.down('sm')} {
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const ProductPrice = styled(props => <Typography variant="subtitle1" {...props} />)`
  color: #1c1c1c;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

export const ProductBrand = styled(props => <Typography variant="subtitle2" {...props} />)`
  color: #8b96a5;
`;

export const ProductDescription = styled(props => (
  <Typography variant="body2" color="text.secondary" noWrap {...props} />
))`
  margin-bottom: 8px;
  max-height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: fit-content;
  ${props => props.theme.breakpoints.down('sm')} {
    display: none;
  }
`;
