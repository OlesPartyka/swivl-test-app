import React, { useState } from 'react';
import {
  PrivacyContainer, 
  PrivacyText, 
  SwitchWrapper, 
  SwitchCircle
} from './PrivacyToggleStyles';



export const PrivacyToggle = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <PrivacyContainer>
      <PrivacyText>Public</PrivacyText>
      <SwitchWrapper onClick={handleToggle} $isActive={isActive}>
        <SwitchCircle $isActive={isActive} />
      </SwitchWrapper>
      <PrivacyText>Private</PrivacyText>
    </PrivacyContainer>
  );
};