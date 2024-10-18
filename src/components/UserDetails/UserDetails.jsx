import React from 'react';
import {
  UserDetailsContainer,
  UserDetailsItem,
  UserDetailsTop,
  UserDetailsImage,
  UserDetailsTopContent,
  UserDetailsName,
  UserDetailsNick,
  UserDetailsEdit,
  UserDetailsStatistics,
  UserDetailsStatItem,
  UserDetailsStatNum,
  UserDetailsStatText,
  UserDetailsDescription,
} from './UserDetailsStyles';

import { Dropdown } from '../Dropdown/Dropdown';
import Avatar from '../../assets/images/avatar.jpg';

export const UserDetails = () => {
  return (
    <UserDetailsContainer>
      <UserDetailsItem>
        <UserDetailsTop>
          <UserDetailsImage src={Avatar} alt="user-img" />
          <UserDetailsTopContent>
            <UserDetailsName>Benjamin Clementine</UserDetailsName>
            <UserDetailsNick>@benclementine</UserDetailsNick>
            <UserDetailsEdit href="#">Edit Profile</UserDetailsEdit>
          </UserDetailsTopContent>
          <Dropdown />
        </UserDetailsTop>

        <UserDetailsStatistics>
          <UserDetailsStatItem>
            <UserDetailsStatNum>45</UserDetailsStatNum>
            <UserDetailsStatText>synths</UserDetailsStatText>
          </UserDetailsStatItem>
          <UserDetailsStatItem>
            <UserDetailsStatNum>110</UserDetailsStatNum>
            <UserDetailsStatText>followers</UserDetailsStatText>
          </UserDetailsStatItem>
          <UserDetailsStatItem>
            <UserDetailsStatNum>322</UserDetailsStatNum>
            <UserDetailsStatText>following</UserDetailsStatText>
          </UserDetailsStatItem>
        </UserDetailsStatistics>

        <UserDetailsDescription>
          Cryptocurrencies including Ethereum, Ripple, and Litecoin have all plunged between 20 to 30 percent each, according to CoinMarketCap. Here is the latest Ripple price news and live updates on XRP, bitcoin and Ethereum.
        </UserDetailsDescription>
      </UserDetailsItem>
    </UserDetailsContainer>
  );
};

