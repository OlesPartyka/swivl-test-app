import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { onTablet } from '../../styles/mixins';
import ArrDown from '../../assets/images/icons/icon-arrow-down.svg';
import NotificationsIcon from '../../assets/images/icons/notifications.svg';
import Share from '../../assets/images/icons/share.svg';
import Medium from '../../assets/images/icons/medium.svg';
import Plus from '../../assets/images/icons/plus.svg';

export const HeaderContainer = styled.header`
  background-color: ${colors.mainWhite};
  box-shadow: 0px 12px 12px 0px ${colors.shadow};
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  align-self: flex-start;
  margin-top: 5px;

  ${onTablet(`
    margin-top: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
  `)}
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 23px;
`;

export const ProfileSection = styled.div`
  ${onTablet(`
    display: flex;
    gap: 17px;
  `)}
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  ${onTablet(`
    margin-bottom: 0;
  `)}
`;

export const UserName = styled.span`
  margin-right: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${colors.textDarkGray};
`;

export const ProfileImage = styled.img`
  margin-right: 7px;
  border-radius: 50%;
`;

export const ArrowDown = styled.a`
  background-image: url(${ArrDown});
  text-decoration: none;
  height: 16px;
  width: 16px;
  cursor: pointer;
`;

export const Notifications = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NotificationIcon = styled.a`
  background-image: url(${NotificationsIcon});
  text-decoration: none;
  height: 32px;
  width: 32px;
  cursor: pointer;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
`;

export const ShareIcon = styled.a`
  background-image: url('${Share}');
  text-decoration: none;
  height: 32px;
  width: 32px;
  cursor: pointer;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
`;

export const MediumIcon = styled.a`
  background-image: url(${Medium});
  text-decoration: none;
  height: 32px;
  width: 32px;
  cursor: pointer;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
`;

export const HeaderBottom = styled.div`
  position: relative;
`;

export const Tabs = styled.ul`
  display: flex;
  gap: 36px;
  margin-bottom: 23px;
`;

export const TabsItem = styled.li`
cursor: pointer;
font-size: 14px;
line-height: 16px;
color: ${props => (props.$isActive ? colors.textDarkGray : colors.textLightGray)};
font-weight: ${props => (props.$isActive ? 600 : 400)};
position: relative;

&::after {
  content: ${props => (props.$isActive ? "''" : "none")};
  display: block;
  height: 4px;
  width: 100%;
  background: ${colors.gradientBg};
  position: absolute;
  bottom: -23px;
}
`;

export const Button = styled.button`
  bottom: 0;
  color: ${colors.mainWhite};
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  transform: translateY(50%);
  background: url(${Plus}) no-repeat center, ${colors.gradientBg};
  cursor: pointer;
  position: absolute;
  right: 0;

  ${onTablet(`
    width: 64px;
    height: 64px;
  `)}
`;
