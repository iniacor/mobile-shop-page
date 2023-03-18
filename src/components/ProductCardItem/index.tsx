import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import type Product from '../../entities/products';
import * as Styled from './ProductCardItem.styled';

const ProductCardItem = (card: Product) => {
  const { id, title, image, price, brand, description } = card;
  const navigate = useNavigate();
  return (
    <Styled.ProductCardItem onClick={() => navigate(`${id}`)}>
      <Styled.ProductImageWrapper>
        <Styled.ProductImage image={image} />
      </Styled.ProductImageWrapper>
      <Styled.ProductContent>
        <Styled.ProductTitle>{title}</Styled.ProductTitle>
        <Styled.ProductPrice>${price}</Styled.ProductPrice>
        <Styled.ProductBrand>{brand}</Styled.ProductBrand>
        <Styled.ProductDescription>{description}</Styled.ProductDescription>
        <Link
          to={{
            pathname: `${id}`,
          }}
          style={{ fontWeight: '500', color: '#0D6EFD' }}
        >
          View details
        </Link>
      </Styled.ProductContent>
    </Styled.ProductCardItem>
  );
};

export default ProductCardItem;
