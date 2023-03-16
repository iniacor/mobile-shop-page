import { List } from '@mui/material';
import styled from 'styled-components';

export const ProductsList = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 32px;
  ${props => props.theme.breakpoints.down('sm')} {
    padding-left: 0;
  }
`;
