import styled from 'styled-components';
import { colors } from '../../styles/variables';
import Link from '../../assets/images/icons/icon_link.svg';
import View from '../../assets/images/icons/icon_view.svg';
import Like from '../../assets/images/icons/icon_like.svg';

export const CardContainer = styled.article`
  box-sizing: border-box;
  padding: 24px;
  max-width: 374px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.mainWhite};
  box-shadow: ${colors.shadow};
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardTitle = styled.h3`
  margin-top: auto;
  margin-bottom: 44px;
  font-family: 'Montserrat';
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  text-align: left;
  max-width: 320px;
  color: ${colors.textLightGray};
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardAuthor = styled.a`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${colors.textLightGray};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    display: block;
    border-radius: 50%;
    background-color: ${colors.bgGrey};
  }
`;

export const CardShare = styled.a`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.textLightRed};
  text-decoration: none;
  cursor: pointer;
`;

export const CardShared = styled.a`
  font-size: 16px;
  line-height: 18px;
  color: ${colors.textLightGray};
  cursor: pointer;
  text-decoration: none;

  span {
    font-size: 16px;
    line-height: 16px;
    color: ${colors.textLightGray};
    background-color: ${colors.bgLight};
    font-weight: 600;
  }
`;

export const CardSharedWeblink = styled(CardShared)`
  display: flex;
  align-items: center;
  gap: 3px;

  &::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    background-image: url(${Link});
  }
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: 'OpenSans';
  font-size: 14px;
  line-height: 16px;
  color: ${colors.textLightGray};
  font-weight: 600;
`;

export const CardView = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    background-image: url(${View});
    background-repeat: no-repeat;
  }
`;

export const CardLike = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    background-image: url(${Like});
    background-repeat: no-repeat;
  }
`;