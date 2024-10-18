import React, { useState } from 'react';
import {
  DropdownContainer,
  DropdownToggle,
  DropdownDot,
  DropdownMenu,
  DropdownItemReport,
  DropdownItemBlock
} from './DropdownStyles'; 

export const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.dropdown')) {
      setIsActive(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <DropdownContainer className="dropdown">
      <DropdownToggle onClick={toggleDropdown}>
        <DropdownDot />
        <DropdownDot />
        <DropdownDot />
      </DropdownToggle>
      <DropdownMenu  $isActive={isActive}>
        <DropdownItemReport>Report User</DropdownItemReport>
        <DropdownItemBlock>Block User</DropdownItemBlock>
      </DropdownMenu>
    </DropdownContainer>
  );
};

