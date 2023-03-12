import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Typography variant="h5" component="h1">
        Choose category:
      </Typography>
      <Link to="/electronics">Electronics</Link>
    </>
  );
};
export default HomePage;
