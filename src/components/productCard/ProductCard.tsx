import React from 'react';
import { Typography, Box } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { BuyButton } from '@components/buttons/Buttons.styled';
import Attributes from '@components/attributes/Attributes';
import * as Styled from './ProductCard.styled';
import type Product from '@entities/products';

const ProductCard = ({ image, title, price, attributes, description }: Product) => {
  return (
    <>
      <Styled.ProductCard>
        <Styled.ProductImageWrapper>
          <Styled.ProductImage image={`.${image}`} />
        </Styled.ProductImageWrapper>
        <Styled.ProductContent>
          <Styled.ProductTitle>{title}</Styled.ProductTitle>
          <Styled.ProductPrice>${price}</Styled.ProductPrice>
          <BuyButton sx={{ mb: '28px' }}>
            <Styled.ButtonText>
              <ShoppingCartOutlinedIcon sx={{ mr: '10px' }} />
              Buy
            </Styled.ButtonText>
          </BuyButton>
          <Box>
            <Attributes attributes={attributes} />
          </Box>
        </Styled.ProductContent>
      </Styled.ProductCard>
      <Styled.ProductDescriptionBlock>
        <Styled.ProductDescription>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Styled.ProductDescription>
      </Styled.ProductDescriptionBlock>
    </>
  );
};

export default ProductCard;
