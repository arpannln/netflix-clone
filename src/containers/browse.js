import React, { useContext, useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import SelectProfileContainer from './profiles';
import FooterContainer from './footer';
import { FirebaseContext } from '../context/firebase';
import { Card, Loading, Header, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { selectionFilterByAttribute } from '../utils';

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

  useEffect(() => {
    const fuse = new Fuse(Object.values(slideRows).flat(), { keys: ['description', 'title', 'genre']});
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (searchTerm.length > 3 && results.length > 0) {
      setSlideRows(selectionFilterByAttribute(results, 'genre'));
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm])

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
            {
              Object.keys(slideRows).map((genre) => (
                <Card key={`${category}-${genre.toLowerCase()}`}>
                  <Card.Title>{genre}</Card.Title>
                  <Card.Entities>
                    {slideRows[genre].map((item = {}) => (
                      <Card.Item key={item.docId} item={item}>
                        <Card.Image src={`/images/${category}/${genre}/${item.slug}/small.jpg`}/>
                        <Card.Meta>
                          <Card.SubTitle>{item.title}</Card.SubTitle>
                          <Card.Text>{item.description}</Card.Text>
                        </Card.Meta>
                      </Card.Item>
                    ))}
                  </Card.Entities>
                  <Card.Feature category={category}>
                    <Player>
                      <Player.Button/>
                      <Player.Video src="/videos/bunny.mp4"/>
                    </Player>
                  </Card.Feature>
                </Card>
              ))
            }
          </Card.Group>
          <FooterContainer/>
        </>
      );
    }
  }

  return <SelectProfileContainer user={user} setProfile={setProfile}/>;
}
