import * as React from 'react';
import { Typography } from '@mui/material';
import theme from '@theme/index';
import * as Styled from './Buttons.styled';

type ApplyButtonProps = {
  handleApplyFilter: () => void;
};
export default function ApplyButton({ handleApplyFilter }: ApplyButtonProps) {
  return (
    <Styled.ApplyButton onClick={handleApplyFilter}>
      <Typography
        sx={{ color: theme.palette.primary.main, textTransform: 'none', fontSize: '1rem' }}
      >
        Apply
      </Typography>
    </Styled.ApplyButton>
  );
}
