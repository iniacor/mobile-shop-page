import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

interface attribute {
  key: string;
}

type productAttributes = {
  attributes: attribute[];
};

export default function Attributes({ attributes }: productAttributes) {
  const productAttributes = attributes.reduce((acc, curr, index) => {
    const [key, value] = Object.entries(curr)[0];
    acc.push({ key, value, id: index });
    return acc;
  }, []);
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
