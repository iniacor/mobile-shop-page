import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

export const MainSection = styled(props => <Box component="main" flexGrow={1} {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
