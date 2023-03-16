import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type OuyputGetAmountProps = {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputMaxPrice({ value, onChange }: OuyputGetAmountProps) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, ml: 0, width: '11ch' },
        '& .MuiFormLabel-root': {
          fontSize: '1rem',
          lineHeight: '1em',
          fontFamily: 'Inter',
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          sx={{
            '& .MuiInput-input': {
              padding: '7px',
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
          label="Max"
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
