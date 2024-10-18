import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { onTablet } from '../../styles/mixins';
import Edit from '../../assets/images/icons/edit.svg';

export const UserDetailsContainer = styled.aside`
  padding-top: 72px;
`;

export const UserDetailsItem = styled.article`
   max-width: 350px;
`;

export const UserDetailsTop = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 34px;
`;

export const UserDetailsImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;

  ${onTablet(`
      width: 120px;
      height: 120px;
  `)}
`;

export const UserDetailsTopContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserDetailsName = styled.h3`
  max-width: 145px;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  text-align: left;
  margin-bottom: 4px;
  color: ${colors.textDarkGray}; 

   ${onTablet(`
      margin-bottom: 8px;
  `)}
`;

export const UserDetailsNick = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 8px;
  color: ${colors.textDarkGray};

   ${onTablet(`
      margin-bottom: 16px;
  `)}
`;

export const UserDetailsEdit = styled.a`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${colors.textLightRed};
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-image: url(${Edit});
  }
`;

export const UserDetailsStatistics = styled.ul`
  max-width: 286px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const UserDetailsStatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserDetailsStatNum = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${colors.textDarkGray}; 
`;

export const UserDetailsStatText = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.textLightGray}; 
`;

export const UserDetailsDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${colors.textLightGray};
`;
