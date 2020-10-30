import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink, Feature, Text, Title, Link, Group, Picture, Profile, Dropdown } from './styles/header';

export default function Header({ background = true, children, ...restProps }) {
  return background ? <Background {...restProps}>{children}</Background> : children;
}

Header.Container = function ({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function ({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

//This Feature thing could be another component tbh..
Header.Feature = function ({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureText = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function ({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.FeatureTitle = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

Header.Picture = function ({ ...restProps }) {
  return <Picture {...restProps}/>;
};

Header.Logo = function ({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps}/>
    </ReactRouterLink>
  );
};

Header.Dropdown = function ({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Profile = function ({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.ButtonLink = function ({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
