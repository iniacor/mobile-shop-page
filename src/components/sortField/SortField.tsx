import React from 'react';
import * as Styled from './SortField.styled';
import { LowSortButton, HighSortButton, SortButtonText } from '../buttons/Buttons.styled';
import FilterMobileButton from '@components/buttons/FilterMobileButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloseButton from '@components/buttons/CloseFilterButton';
import theme from '@theme/index';

type Handler = () => void;

type SortFieldProps = {
  onHighSort: Handler;
  onLowSort: Handler;
  openMobFilter: boolean;
  setopenMobFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

const SortField = ({ onHighSort, onLowSort, openMobFilter, setopenMobFilter }: SortFieldProps) => {
  const handlerClickMobFilter = () => {
    setopenMobFilter(!openMobFilter);
  };
  return (
    <Styled.SortField>
      <LowSortButton onClick={onHighSort}>
        <SortButtonText>Price: Low to High</SortButtonText>
        <FileUploadIcon
          sx={{
            fill: '#8B96A5',
            [theme.breakpoints.down('sm')]: {
              width: '0.7em',
              height: '0.7em',
            },
          }}
        />
      </LowSortButton>
      <HighSortButton onClick={onLowSort}>
        <SortButtonText>Price: High to Low</SortButtonText>
        <FileDownloadIcon
          sx={{
            fill: '#8B96A5',
            [theme.breakpoints.down('sm')]: {
              width: '0.7em',
              height: '0.7em',
            },
          }}
        />
      </HighSortButton>
      {openMobFilter ? (
        <CloseButton handlerClickMobFilter={handlerClickMobFilter} />
      ) : (
        <FilterMobileButton
          handlerClickMobFilter={handlerClickMobFilter}
          openMobFilter={openMobFilter}
        />
      )}
    </Styled.SortField>
  );
};
export default SortField;
