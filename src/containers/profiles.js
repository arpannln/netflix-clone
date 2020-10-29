import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function SelectProfileContainer({ user = {}, setProfile }) {
  const { displayName = '', photoURL } = user;
  return (
    <>
      <Header background={false}>
        <Header.Container>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
        </Header.Container>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item
            onClick={() =>
              setProfile({
                displayName,
                photoURL
              })
            }
          >
            <Profiles.Picture src={photoURL}/>
            <Profiles.Name>{displayName}</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    </>
  );
}
