import * as React from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import * as Styled from './Buttons.styled';

type FilterMobileButtonProps = {
  handlerClickMobFilter: () => void;
  openMobFilter: boolean;
};
export default function FilterMobileButton({
  handlerClickMobFilter,
  openMobFilter,
}: FilterMobileButtonProps) {
  return (
    <Styled.FilterMobileButton onClick={handlerClickMobFilter}>
      <FilterAltOutlinedIcon sx={{ fill: openMobFilter ? '#1C1C1C' : '#0D6EFD' }} />
    </Styled.FilterMobileButton>
  );
}
