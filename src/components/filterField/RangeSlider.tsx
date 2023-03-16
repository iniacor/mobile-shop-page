import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type RangeSliderProps = {
  minPrice: number;
  maxPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
};

function valuetext(value: number) {
  return `$${value}`;
}

export default function RangeSlider({
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
}: RangeSliderProps) {
  const [value, setValue] = React.useState<number[]>([minPrice, maxPrice]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    const newValues = newValue as number[];
    setMinPrice(newValues[0]);
    setMaxPrice(newValues[1]);
    setValue([newValues[0], newValues[1]]);
  };

  React.useEffect(() => {
    setValue([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  return (
    <Box sx={{ width: 212 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={4000}
      />
    </Box>
  );
}
