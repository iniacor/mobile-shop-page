import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type InputChangeAmountProps = {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputMinPrice({ value, onChange }: InputChangeAmountProps) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '10ch',
        },
        '.MuiFormLabel-root': {
          fontSize: '1rem',
          lineHeight: '1em',
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          sx={{
            '& .MuiInput-input': {
              fontSize: '1rem',
              border: '1px solid #DEE2E7',
              borderRadius: '6px',
              backgroundColor: '#fff',
            },
            '& .MuiInput-root:before': {
              borderBottom: '1px solid rgba(0, 0, 0, 0)',
            },
          }}
          id="standard-number"
          label="Min"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          value={value}
          onChange={onChange}
        />
      </div>
    </Box>
  );
}
