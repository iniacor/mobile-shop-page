import React from 'react';
import { Container, Box } from '@mui/material';
import Logo from '../../assets/icons/Logo';
import * as Styled from './Header.styled';

const Header = () => {
  return (
    <Styled.AppBar position="fixed">
      <Container>
        <Box display="flex" alignItems="center">
          <Logo />
          <Styled.Title variant="h3">Frontend task | </Styled.Title>
          <Styled.Author variant="h3">Kutsenko Ihor</Styled.Author>
        </Box>
      </Container>
    </Styled.AppBar>
  );
};

export default Header;
