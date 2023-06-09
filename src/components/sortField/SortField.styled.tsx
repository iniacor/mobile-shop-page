import { Paper } from '@mui/material';
import styled from 'styled-components';

export const SortField = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 64px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.palette.gray[300]};
  ${props => props.theme.breakpoints.down('sm')} {
    background-color: transparent;
    margin-bottom: 0;
    border: none;
  }
`;
