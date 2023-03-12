import React from 'react';
import { Container, Toolbar, Box } from '@mui/material';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import theme from '@theme/index';
import * as Styled from './Header.styled';

const Header = () => {
  return (
    <Styled.AppBar sx={{ background: '#fff' }} position="fixed">
      <Container>
        <Toolbar>
          <ShoppingBagTwoToneIcon
            fontSize="large"
            sx={{
              mr: 2,
              backgroundColor: theme.palette.primary.main,
              width: theme.spacing(5),
              height: theme.spacing(5),
              borderRadius: '10px',
            }}
          />
          <Box display="flex">
            <Styled.Title variant="h3">Frontend task | </Styled.Title>
            <Styled.Author variant="h3">Kutsenko Ihor</Styled.Author>
          </Box>
        </Toolbar>
      </Container>
    </Styled.AppBar>
  );
};

export default Header;
