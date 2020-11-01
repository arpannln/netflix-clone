import React, { useState, useContext, createContext } from 'react';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature = {}, setShowFeature } = useContext(FeatureContext);
  const { genre, slug, description, maturity, title } = itemFeature;

  return showFeature ? (
    <Feature
      src={`/images/${category}/${genre}/${slug}/large.jpg`}
      {...restProps}>
      <Content>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureText>{description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close"/>
        </FeatureClose>
      </Content>
      <Group margin="30px 0" flexDirection="row" alignItems="center">
        <Maturity rating={maturity}>
          {maturity < 12 ? 'PG' : maturity}
        </Maturity>
        <FeatureText fontWeight="bold">
          {genre}
        </FeatureText>
      </Group>
    </Feature>
  ) : null;

  return <Feature {...restProps}>{children}</Feature>;
}

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
      <Item
        onClick={() => {
          setItemFeature(item);
            setShowFeature(true);
          }}
        {...restProps}
      >
        {children}
      </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image { ...restProps }/>;
}

Card.Entities = function CardEntities({ ...restProps }) {
  return <Entities { ...restProps }/>;
}
