import Breadcrumbs from '@components/breadCrumbs/BreadCrumbs';
import Header from '@components/header/Header';
import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import * as Styled from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header />
      <Styled.MainSection>
        <Container>
          <Breadcrumbs />
          {<Outlet />}
        </Container>
      </Styled.MainSection>
    </>
  );
};
export default Layout;
