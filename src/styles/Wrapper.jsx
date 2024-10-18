import styled from 'styled-components';
import { onTablet } from './mixins';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

   ${onTablet(`
    flex-direction: row;
    align-items: flex-start;
    gap: 47px;
  `)}
`;
