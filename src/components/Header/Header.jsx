import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderContent,
  HeaderTop,
  Logo,
  LogoImage,
  ProfileSection,
  Profile,
  UserName,
  ProfileImage,
  ArrowDown,
  Notifications,
  NotificationIcon,
  ShareIcon,
  MediumIcon,
  HeaderBottom,
  Tabs,
  TabsItem,
  Button
} from './HeaderStyles';

import { Container } from '../../styles/Container';

import Logotype from '../../assets/images/logo.png';
import ProfileIcon from '../../assets/images/profile-icon.jpg';


const tabs = [
  { id: 1, label: 'FEED' },
  { id: 2, label: 'EXPLORE' },
  { id: 3, label: 'DISCUSSIONS' }
];

export const Header = () => {
  const [activeTab, setActiveTab] = useState('FEED');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <HeaderContainer>
      <Container>
      <HeaderContent>
        <HeaderTop>
          <Logo href="#">
            <LogoImage
              src={Logotype}
              alt="Synth logo"
            />
          </Logo>

          <ProfileSection>
            <Profile>
              <UserName>Arthur Wood</UserName>
              <ProfileImage
                src={ProfileIcon}
                alt="profile-icon"
              />
              <ArrowDown href="#" />
            </Profile>
            <Notifications>
              <NotificationIcon href="#" />
              <ShareIcon href="#" />
              <MediumIcon href="#" />
            </Notifications>
          </ProfileSection>
        </HeaderTop>
        <HeaderBottom>
          <Tabs>
            {tabs.map((tab) => (
              <TabsItem key={tab.id} $isActive={activeTab === tab.label} onClick={() => handleTabClick(tab.label)}>
                {tab.label}
              </TabsItem>
            ))}
          </Tabs>
          <Button></Button>
        </HeaderBottom>
      </HeaderContent>
      </Container>
    </HeaderContainer>
  );
};
