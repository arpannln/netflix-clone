import React, { useContext, useState, useEffect } from 'react';
import SelectProfileContainer from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Card, Loading, Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('series')
  const [slideRows, setSlideRows] = useState([]);
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

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

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
                <Header.TextLink
                  active={category === 'series'}
                  onClick={() => setCategory('series')}>
                  Series
                </Header.TextLink>
                <Header.TextLink
                  active={category === 'movies'}
                  onClick={() => setCategory('movies')}>
                  Movies
                </Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.Search
                  searchTerm={searchTerm}
                  onChange={({target = {}}) => setSearchTerm(target.value)}
                  placeholder="Search movies and series">
                </Header.Search>
                <Header.Profile>
                  <Header.Picture src={`/images/users/${user.photoURL}.png`}/>
                  <Header.Dropdown>
                    <Header.Group>
                      <Header.Picture src={`/images/users/${user.photoURL}.png`}/>
                      <Header.TextLink>{user.displayName}</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                      <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign Out</Header.TextLink>
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
              <Header.PlayButton>Play</Header.PlayButton>
            </Header.Feature>
          </Header>

          <Card.Group>

          </Card.Group>
        </>
      );
    }
  }

  return <SelectProfileContainer user={user} setProfile={setProfile}/>;
}
