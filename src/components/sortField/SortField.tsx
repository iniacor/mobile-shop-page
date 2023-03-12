import React from 'react';
import { Button, Typography } from '@mui/material';
import * as Styled from './SortField.styled';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const SortField = ({ onHighSort, onLowSort }) => {
  return (
    <Styled.SortField>
      <Button
        variant="outlined"
        sx={{ p: '5px 10px', mr: 1, borderRadius: '6px', border: ' 1px solid #DEE2E7' }}
        onClick={onHighSort}
      >
        <Typography
          sx={{
            textTransform: 'none',
            fontSize: '1rem',
            mr: '18px',
            fontFamily: 'Inter',
            fontWeight: '400',
            lineHeight: 1,
            color: '#1C1C1C',
          }}
        >
          Price: Low to High
        </Typography>
        <FileUploadIcon sx={{ fill: '#8B96A5' }} />
      </Button>
      <Button
        variant="outlined"
        sx={{ p: '5px 10px', borderRadius: '6px', border: ' 1px solid #DEE2E7' }}
        onClick={onLowSort}
      >
        <Typography
          sx={{
            textTransform: 'none',
            fontSize: '1rem',
            mr: '18px',
            fontFamily: 'Inter',
            fontWeight: '400',
            lineHeight: 1,
            color: '#1C1C1C',
          }}
        >
          Price: High to Low
        </Typography>
        <FileDownloadIcon sx={{ fill: '#8B96A5' }} />
      </Button>
    </Styled.SortField>
  );
};
export default SortField;
