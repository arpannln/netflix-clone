import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header background={false}>
        <Header.Container>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
        </Header.Container>
      </Header>
    </>
  );
}
