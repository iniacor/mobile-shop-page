import React from 'react';
import {
  Box,
  Typography,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
} from '@mui/material';
import styled from 'styled-components';

export const PriceAccordion = styled(props => <MuiAccordion {...props} />)`
  background-color: transparent;
  ${props => props.theme.breakpoints.down('sm')} {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

export const BrandsAccordion = styled(props => <MuiAccordion {...props} />)`
  background-color: transparent;
  ${props => props.theme.breakpoints.down('sm')} {
    align-items: stretch;
  }
`;

export const AccordionTitle = styled(props => (
  <Typography variant="h6" component="h6" {...props} />
))`
  font-size: 1rem;
  width: 100%;
  flex-shrink: 0;
  font-weight: 600;
`;

export const AccordionSummary = styled(props => <MuiAccordionSummary {...props} />)`
  padding: 0;
  ${props => props.theme.breakpoints.down('sm')} {
    & .MuiAccordionSummary-content.Mui-expanded {
      margin: 0;
      align-items: baseline;
    }
    &.MuiAccordionSummary-root.Mui-expanded {
      min-height: 0;
    }
  }
`;

export const AccordionDetails = styled(props => <MuiAccordionDetails {...props} />)`
  padding: 8px 0px 16px;
  width: fit-content;
`;

export const InputPriceArea = styled(Box)`
  display: flex;
  justify-content: space-evenly;
`;
