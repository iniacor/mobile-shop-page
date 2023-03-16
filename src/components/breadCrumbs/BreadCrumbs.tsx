import * as React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import * as Styled from './BreadCrumbs.styled';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const breadcrumbNameMap = {
  '/': 'Home',
  '/electronics': 'Electronics',
  '/electronics/:id': 'Product',
};

const BreadcrumbItem = ({ to, ...rest }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  let isMatch = false;
  const breadcrumbs = pathnames.map((_, index) => {
    const url = `/${pathnames.slice(0, index + 1).join('/')}`;
    const isActive = url === to;
    const text = breadcrumbNameMap[url];
    isMatch = isMatch || isActive;

    return (
      <Link
        key={url}
        color={isActive ? 'text.primary' : 'inherit'}
        component={RouterLink}
        to={url}
        underline="hover"
        {...rest}
      >
        {text}
      </Link>
    );
  });

  if (!isMatch) {
    breadcrumbs.push(
      <Typography key="not-found" color="text.primary">
        Not Found
      </Typography>,
    );
  }

  return breadcrumbs;
};

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <Styled.Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
      <Link color="inherit" component={RouterLink} to="/">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const url = `/${pathnames.slice(0, index + 1).join('/')}`;
        const text = breadcrumbNameMap[url];
        const isActive = url === location.pathname;

        return isActive ? (
          <Typography key={url} color="text.primary">
            {text}
          </Typography>
        ) : (
          <BreadcrumbItem key={url} to={url} />
        );
      })}
    </Styled.Breadcrumbs>
  );
}

export default Breadcrumbs;
