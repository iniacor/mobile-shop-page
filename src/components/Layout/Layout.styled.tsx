import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

export const MainSection = styled(props => <Box component="main" flexGrow={1} {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 86px;
  padding-bottom: 100px;
  ${props => props.theme.breakpoints.down('sm')} {
    margin-top: 0;
  }
`;
