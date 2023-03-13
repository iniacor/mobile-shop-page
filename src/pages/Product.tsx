import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useParams } from 'react-router-dom';
import { cardData } from './Category';
import { BuyButton } from '@components/buttons/Buttons.styled';
import Attributes from '@components/attributes/Attributes';
import type Product from '../entities/products';

const ProductCardPage = () => {
  const { id } = useParams();
  const currentData: Product | undefined = cardData.find(item => item.id === id);

  if (!currentData) {
    return null;
  }
  const { title, image, price, full_description, attributes } = currentData;

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          minWidth: 0,
          border: '1px solid #DEE2E7',
          borderRadius: '6px',
          padding: '20px',
          marginBottom: '33px',
        }}
      >
        <Box
          sx={{
            width: 380,
            height: 380,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #DEE2E7',
            borderRadius: '6px',
          }}
        >
          <CardMedia component="img" image={`.${image}`} />
        </Box>
        <CardContent sx={{ flex: 1, maxWidth: '430px', minHeight: '507px' }}>
          <Typography
            variant="h6"
            component="h3"
            noWrap
            sx={{
              fontWeight: '600',
              fontSize: '1.2rem',
              lineHeight: '1.4',
              color: '#1C1C1C',
              mb: '10px',
              fontFamily: 'Inter',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: ' #1C1C1C', fontWeight: '600', fontSize: '1.25rem' }}
          >
            ${price}
          </Typography>
          <BuyButton sx={{ mb: '28px' }}>
            <Typography
              variant="button"
              sx={{
                display: 'inline-flex',
                textTransform: 'none',
                fontWeight: '500',
                fontSize: '1rem',
              }}
            >
              <ShoppingCartOutlinedIcon sx={{ mr: '10px' }} />
              Buy
            </Typography>
          </BuyButton>
          <Box>
            <Attributes attributes={attributes} />
          </Box>
        </CardContent>
      </Card>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          minWidth: 0,
          border: '1px solid #DEE2E7',
          borderRadius: '6px',
          padding: '20px',
        }}
      >
        <CardContent sx={{ flex: 1, maxWidth: 'fit-content', minHeight: '285px' }}>
          <Typography variant="body2" color="text.secondary">
            {full_description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCardPage;
