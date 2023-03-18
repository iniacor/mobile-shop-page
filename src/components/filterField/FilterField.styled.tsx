import React from 'react';
import {
  Paper,
  Divider as MuiDivider,
  FormControlLabel as MuiFormControlLabel,
} from '@mui/material';
import styled from 'styled-components';

export const FilterField = styled(props => <Paper {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0;
  background-color: inherit;
  ${props => props.theme.breakpoints.down('sm')} {
    flex-direction: column-reverse;
    display: ${props => (props.openMobFilter ? 'flex' : 'none')};
  }
`;

export const Divider = styled(props => <MuiDivider variant="middle" {...props} />)`
  margin-bottom: 16px;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  ${props => props.theme.breakpoints.down('sm')} {
    display: none;
  }
`;

export const FormControlLabel = styled(props => <MuiFormControlLabel {...props} />)`
  color: ${({ theme }) => theme.palette.text.secondary};
  ${props => props.theme.breakpoints.down('sm')} {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 0;
  }
`;
