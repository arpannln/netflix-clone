import React, { useState, useCallback, useMemo, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer, FooterContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import ReactDOM from 'react-dom';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = useMemo(() => {
    return !firstName || !password || !emailAddress;
  }, [firstName, password, emailAddress]);

  const handleSignUp = useCallback((e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((response = {}) => {
        const {user = {}} = response;
        user.updateProfile(
          {
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          }
        ).then(() => {
          history.push(ROUTES.BROWSE);
        }).catch((error) => {
          ReactDOM.unstable_batchedUpdates(() => {
            setFirstName('');
            setEmailAddress('');
            setPassword('');
            setError(error.message);
          })
        })
      })
  }, [firstName, emailAddress, password, firebase, history]);

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid}>
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
              Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
          </Form.Text>
          <Form.SubText>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.SubText>
        </Form>
      </HeaderContainer>
      <FooterContainer/>
    </>
  );
}
