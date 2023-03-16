import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import styled from 'styled-components';

export const AttributesList = styled(props => <List {...props} />)`
  width: 100%;
  max-width: 360px;
  background-color: background.paper;
  ${props => props.theme.breakpoints.up('md')} {
    border-bottom: 1px solid #e0e0e0;
  }
`;
export const AttributesListItem = styled(props => <ListItem {...props} />)`
  ${props => props.theme.breakpoints.down('lg')} {
    padding-bottom: 0;
    padding-top: 0;
    &:last-child {
      display: none;
    }
  }
  ${props => props.theme.breakpoints.between('md', 'xl')} {
    &:first-child {
      border-bottom: 1px solid #e0e0e0;
    }
  }
`;
export const AttributesText = styled(props => <ListItemText {...props} />)`
  color: #8b96a5;
  text-transform: Capitalize;
`;
