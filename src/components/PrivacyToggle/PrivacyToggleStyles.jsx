import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { onTablet } from '../../styles/mixins';

export const PrivacyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  gap: 20px;
  padding-top: 15px;

  ${onTablet(`
    padding-top: 72px;
    justify-content: start;
  `)}
`;

export const PrivacyText = styled.span`
  font-size: 16px;
  line-height: 18px;
  color: ${colors.textLightGray};
`;

export const SwitchWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  background-color: ${colors.bgRed};
  width: 40px;
  height: 24px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid ${colors.bgRed};
`;

export const SwitchCircle = styled.span`
  content: '';
  position: absolute;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${colors.mainWhite};
  top: 50%;
  left: ${(props) => (props.$isActive ? 'auto' : '3px')};
  right: ${(props) => (props.$isActive ? '3px' : 'auto')};
  transform: translateY(-50%);
  transition: all 0.3s ease;
`;
