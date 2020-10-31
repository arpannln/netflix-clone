import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink, Feature, Text, Title, Link, Group, Picture, Profile, Dropdown, Search, SearchIcon, SearchInput, PlayButton } from './styles/header';

export default function Header({ background = true, children, ...restProps }) {
  return background ? <Background {...restProps}>{children}</Background> : children;
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

//This Feature thing could be another component tbh..
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureText = function HeaderFeatureText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.FeatureTitle = function HeaderFeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

Header.Picture = function HeaderPicture({ ...restProps }) {
  return <Picture {...restProps}/>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps}/>
    </ReactRouterLink>
  );
};

Header.Search = function HeaderSearch ({ searchTerm, ...restProps }) {
  const [active, setActive] = useState(false);

  return (
    <Search active={active}>
      <SearchIcon onClick={() => setActive(searchActive => !searchActive)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput {...restProps} value={searchTerm} active={active} onBlur={() => setActive(searchActive => !searchActive)}></SearchInput>
    </Search>
  )
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps}) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
