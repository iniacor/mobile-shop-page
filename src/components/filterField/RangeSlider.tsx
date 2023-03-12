import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// function valuetext(value: number) {
//   console.log(value);

//   return `$${value}`;
// }
// function valuetext(minPrice: number, maxPrice: number) {
//   return `$${minPrice} - $${maxPrice}`;
// }

export default function RangeSlider({ setMinPrice, setMaxPrice, minPrice, maxPrice }) {
  const [value, setValue] = React.useState<number[]>([minPrice, maxPrice]);
  console.log('value', value);
  console.log('minPrise', minPrice);
  console.log('maxPrise', maxPrice);

  const handleChange = (event: Event, newValue: number | number[]) => {
    const newValues = newValue as number[];
    setMinPrice(newValues[0]);
    setMaxPrice(newValues[1]);
    // setValue(newValues);
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
        // getAriaValueText={(minPrice, maxPrice) => valuetext(minPrice, maxPrice)}
      />
    </Box>
  );
}
