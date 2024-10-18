import React from 'react';
import { Header } from './components/Header/Header.jsx';
import { UserDetails } from './components/UserDetails/UserDetails.jsx';
import { PrivacyToggle } from './components/PrivacyToggle/PrivacyToggle.jsx';
import { Card } from './components/Card/Card.jsx';
import { Container } from './styles/Container.jsx';
import { Wrapper } from './styles/Wrapper.jsx';
import { Content } from './styles/Content.jsx';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <UserDetails />
          <main>
            <PrivacyToggle />
            <Content>
            <Card 
              title="New air routes that promise cheap flights in" 
              author="Gregory Watkins" 
            />

            <Card 
              title="New air routes that promise cheap flights in" 
              author="Gregory Watkins" 
            />
      
            <Card 
              title="New air routes that promise cheap flights in"
              author="Gregory Watkins" 
              sharedTo="#discussionaboutanimgttdds…"
              views={88}
              likes={24}
            />
      
            <Card 
              title="New air routes that promise cheap flights in"
              author="Gregory Watkins" 
              isWeblink={true}
              views={88}
              likes={24}
            />
            </Content>
          </main>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
