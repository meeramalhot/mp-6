"use client";

import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
  padding: 2vh;
  background-color: pink;
  color:white;

  border-radius:  2vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
   align-items:  center;
  margin-top: 5vh;
`;

const SignInLink = styled.a`
  margin-top: 2vh;
  padding: 1.5vh 3vh;
  background-color: pink;
  color: white;

  text-decoration: none ;
  border-radius: 1.5vh;
  font-weight: bold;
`;

const Para = styled.p`
  font-size: 3vh;

`

export default function SignIn() {
  return (
    <Container>
      <Header>Github OAuth</Header>
      <Para>Sign in here:</Para>
      
      <SignInLink href="/api/auth/signin">Sign In</SignInLink>
    </Container>
  );
}
