import * as React from 'react';
import { Typography } from '@mui/material';
import theme from '@theme/index';
import * as Styled from './Buttons.styled';

type ApplyButtonProps = {
  onReset: () => void;
};
export default function ResetButton({ onReset }: ApplyButtonProps) {
  return (
    <Styled.ResetButton onClick={onReset}>
      <Typography
        sx={{ color: theme.palette.primary.main, textTransform: 'none', fontSize: '1rem' }}
      >
        Reset filter
      </Typography>
    </Styled.ResetButton>
  );
}
