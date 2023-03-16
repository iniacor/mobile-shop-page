import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import styled from 'styled-components';

export const ProductCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-width: 0;
  border: 1px solid #dee2e7;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 33px;
  ${props => props.theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: center;
    padding: 0;
    border: 0;
    margin-bottom: 0;
  }
`;

export const ProductImage = styled(props => <CardMedia component="img" {...props} />)`
  ${props => props.theme.breakpoints.down('sm')} {
    maxwidth: 100%;
    width: auto;
  }
`;

export const ProductContent = styled(CardContent)`
  flex: 1;
  max-width: 430px;
  min-height: 507px;
  ${props => props.theme.breakpoints.down('sm')} {
    min-height: auto;
    max-width: 350px;
    width: 100%;
  }
`;

export const ProductImageWrapper = styled(Box)`
  width: 380px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dee2e7;
  border-radius: 6px;

  ${props => props.theme.breakpoints.down('sm')} {
    width: 360px;
    height: 305px;
    border: none;
  }
`;

export const ProductTitle = styled(props => (
  <Typography variant="h6" component="h3" noWrap {...props} />
))`
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.4;
  color: #1c1c1c;
  margin-bottom: 10px;
  ${props => props.theme.breakpoints.down('sm')} {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.1;
    text-overflow: inherit;
    white-space: normal;
  }
`;

export const ProductPrice = styled(props => <Typography variant="subtitle1" {...props} />)`
  color: #1c1c1c;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const ButtonText = styled(props => <Typography variant="button" {...props} />)`
  display: inline-flex;
  text-transform: none;
  font-weight: 500;
  font-size: 1rem;
`;

export const ProductDescriptionBlock = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-width: 0;
  border: 1px solid #dee2e7;
  border-radius: 6px;
  padding: 20px;
  ${props => props.theme.breakpoints.down('sm')} {
    padding: 0;
    border: 0;
  }
`;

export const ProductDescription = styled(CardContent)`
  flex: 1;
  max-width: fit-content;
`;
