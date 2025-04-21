"use client";

import type { Session } from "next-auth";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import SignIn from "./components/SignIn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
      align-items: center;
      
  margin-top:5vh;
  text-align: center;
`;

const Welcome = styled.h1`
  font-size: 5vh;
`;

const Email = styled.p`
  font-size: 3vh ;
`;

const ProfileImage = styled.img`
  width: 15vh;
  height: 15vh;
`;

const SignOutLink = styled.a`
  margin-top: 3vh;
  padding:1.5vh 3vh;
  background-color:pink;
  color: white;

  
  text-decoration: none ;
    border-radius: 1.5vh;
  font-weight: bold;
`;


function AuthPrompt() {
  return (
    <main>
      <SignIn></SignIn>
    </main>
  );
}

function Dashboard({ session }: { session: Session }) {
  const { user } = session;

  return (
    <main>
    <Container>
      <Welcome>Hi {user?.name ?? "User"}!!</Welcome>

      {user?.name && 
      <Email>Your Name: {user.name}</Email>
      }
      
      {user?.email && 
      <Email>Your Email: {user.email}</Email>
      }

      
      {user?.image && 
         <ProfileImage src={user.image} alt="user profile" />}
      <SignOutLink href="/api/auth/signout">Sign Out</SignOutLink>
    </Container>
    </main>
  );
}

export default function HomePage() {
  const [session, setSession] = useState<Session | null>(null);

  const fetchSession = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/session");

      
      if (res.ok === false) {
        throw new Error('request togithub oath failed');
      }
      
      const data: Session = await res.json();
      setSession(data);
      
    } catch (err) {
      console.error("could not fetch session", err);
    }
  }, []);

  useEffect(() => {
         fetchSession();

         
  }, [fetchSession]);

  if (!session || !session.user) {
    return <AuthPrompt />;

  } else {
    return <Dashboard session={session} />
  
  };
}
