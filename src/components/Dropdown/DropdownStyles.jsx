import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { onTablet } from '../../styles/mixins';
import Report from '../../assets/images/icons/icon_report.svg';
import Block from '../../assets/images/icons/icon_block.svg';


export const DropdownContainer = styled.div`
  position: relative;
  display: block;
`;

export const DropdownToggle = styled.div`
  width: 10px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1px;
  padding: 5px;
`;

export const DropdownDot = styled.span`
  display: block;
  height: 5px;
  width: 5px;
  background-color: ${colors.textLightGray};
  border-radius: 50%;
`;

export const DropdownMenu = styled.ul`
  box-sizing: border-box;
  position: absolute;
  top: 40%;
  left: -160px;
  background-color: ${colors.mainWhite};
  list-style: none;
  padding: 24px 0;
  margin: 0;
  width: 172px;
  height: 124px;
  display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transform: ${({ $isActive }) => ($isActive ? 'translateY(0)' : 'translateY(-10px)')};
  transition: opacity 0.3s ease, transform 0.3s ease;
  backdrop-filter: blur(21.746253967285156px);

   ${onTablet(`
    left: 1px;
  `)}
`;

export const DropdownItemReport = styled.li`
  padding: 8px 0px 8px 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 16px;
  color: ${colors.textLightGray};
  display: flex;
  align-items: center;
  gap: 16px;

  &:hover {
    background-color:  ${colors.bgLight};
  }

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    background-image: url(${Report});
  }

  &.dropdown__item-block:before {
    background-image: url(${Block});
  }
`;

export const DropdownItemBlock = styled.li`
  padding: 8px 0px 8px 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 16px;
  color: ${colors.textLightGray};
  display: flex;
  align-items: center;
  gap: 16px;

  &:hover {
    background-color:  ${colors.bgLight};
  }

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    background-image: url(${Block});
  }
`;