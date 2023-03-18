import * as React from 'react';
import * as Styled from './Attribute.styled';

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
    <Styled.AttributesList>
      {productAttributes.map(value => (
        <Styled.AttributesListItem
          key={value.id}
          disableGutters
          secondaryAction={<Styled.AttributesText primary={`${value.value}`} />}
        >
          <Styled.AttributesText primary={`${value.key}`} />
        </Styled.AttributesListItem>
      ))}
    </Styled.AttributesList>
  );
}
