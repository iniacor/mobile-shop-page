import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

type attribute = {
  category?: string;
  type?: string;
  material?: string;
  design?: string;
};

type attributeKey = keyof attribute;

type ProductAttribute = {
  key: attributeKey;
  value?: string;
  id: number;
};

type productAttributes = {
  attributes: { [key in attributeKey]?: string }[];
};

export default function Attributes({ attributes }: productAttributes) {
  const productAttributes = attributes.reduce((acc, curr, index) => {
    const key = Object.keys(curr)[0] as attributeKey;
    acc.push({ key, value: curr[key], id: index });
    return acc;
  }, [] as ProductAttribute[]);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {productAttributes.map(value => (
        <ListItem
          key={value.id}
          disableGutters
          secondaryAction={<ListItemText primary={`${value.value}`} />}
        >
          <ListItemText primary={`${value.key}`} sx={{ color: '#8B96A5', fontFamily: 'Inter' }} />
        </ListItem>
      ))}
    </List>
  );
}
