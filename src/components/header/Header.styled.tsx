import { AppBar as MuiAppBar, Typography as MuiTypography } from '@mui/material';
import styled from 'styled-components';

export const AppBar = styled(MuiAppBar)`
  position: fixed;
  justify-content: center;
  height: 86px;
  background: #fff;
  box-shadow: none;
  ${props => props.theme.breakpoints.down('sm')} {
    display: none;
  }
`;

export const Title = styled(MuiTypography)`
  color: #8cb7f5;
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
  margin-right: 5px;
  margin-left: 10px;
`;
export const Author = styled(MuiTypography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
`;
