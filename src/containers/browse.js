import React, { useContext, useState, useEffect } from 'react';
import SelectProfileContainer from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Loading, Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const { displayName } = profile;

  useEffect(() => {
    // if (profile.displayName && loading) {
    //   setLoading(false);
    // }
    // I don't like this hacky..
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [displayName])

  if (displayName) {
    if (loading) {
      return <Loading src={user.photoURL}/>;
    } else {
      return (
        <>
          <Loading.ReleaseBody/>
          <Header src="joker1" dontShowOnSmallViewPort>
            <Header.Container>
              <Header.Group>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
                <Header.TextLink>Series</Header.TextLink>
                <Header.TextLink>Movies</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.Profile>
                  <Header.Picture src={user.photoURL}/>
                  <Header.Dropdown>
                    <Header.Group>
                      <Header.Picture src={user.photoURL}/>
                      <Header.TextLink>{user.displayName}</Header.TextLink>
                    </Header.Group>
                  </Header.Dropdown>
                </Header.Profile>
              </Header.Group>
            </Header.Container>
            <Header.Feature>
              <Header.FeatureTitle>Watch Joker Now</Header.FeatureTitle>
              <Header.FeatureText>
                Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets
                of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise
                he projects in a futile attempt to feel like he's a parth of the world around him.
              </Header.FeatureText>
            </Header.Feature>
          </Header>
        </>
      );
    }
  }

  return <SelectProfileContainer user={user} setProfile={setProfile}/>;
}
