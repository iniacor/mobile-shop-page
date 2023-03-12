import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';

import styled from 'styled-components';

export const Breadcrumbs = styled(props => <MuiBreadcrumbs {...props} />)`
  color: ${({ theme }) => theme.palette.gray[500]};
  padding: 20px 0;
`;
