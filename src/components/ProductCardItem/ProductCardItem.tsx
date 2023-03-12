import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

type ProductType = {
  id: string;
  title: string;
  image: string;
  price: number;
  brand: string;
  description: string;
  link: string;
};

const ProductCardItem = (card: ProductType) => {
  const { id, title, image, price, brand, description } = card;
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: 0,
        border: '1px solid #DEE2E7',
        borderRadius: '6px',
      }}
    >
      <Box
        sx={{
          width: 210,
          height: 210,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardMedia component="img" image={image} sx={{ maxWidth: '100%', width: 'auto' }} />
      </Box>
      <CardContent sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          variant="h6"
          component="h3"
          noWrap
          sx={{ fontWeight: '500', color: '#1C1C1C', mb: 2 }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: ' #1C1C1C', fontWeight: '600', fontSize: '1.25rem' }}
        >
          ${price}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#8B96A5' }}>
          {brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Link
          to={{
            pathname: `${id}`,
          }}
        >
          View details
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCardItem;
