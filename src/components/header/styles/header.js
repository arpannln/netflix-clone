import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => src ? `../images/misc/${src}.jpg` :
      '../images/misc/home-bg.jpg'}) top left / cover no-repeat;

  @media (max-width: 800px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 10px;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  margin-right: 5px;
  cursor: pointer;
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;

`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 90px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;

export const Link = styled(Text)`
  color: white;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === true ? '700' : 'normal')};
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: darkgray;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;


export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Title = styled(Text)`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Dropdown = styled.div`
  display: none;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  width: 150px;
  top: 32px;
  right: 0px;

  ${Group}: last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin: 5px 0;

    &:last-of-type {
      border-top: 1px solid gray;
      margin-bottom: 0;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }

`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border: ${({active}) => active ? '1px solid white' : 0};
  background-color: ${({active}) => active ? '#44444459' : 'transparent'};

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`
export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: #44444459;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  color: white;
  border: none;
  transition: width 0.5s;
  outline: #44444459;
  height: 30px;
  font-size: 14px;
  width: ${({active}) => active ? '200px' : 0};
  visibility: ${({active}) => active ? 'visible' : 'hidden'};
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;
