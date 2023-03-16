import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import * as Styled from './Buttons.styled';

type ApplyButtonProps = {
  handlerClickMobFilter: () => void;
};
export default function CloseButton({ handlerClickMobFilter }: ApplyButtonProps) {
  return (
    <Styled.CloseButton onClick={handlerClickMobFilter}>
      <CloseIcon />
    </Styled.CloseButton>
  );
}
