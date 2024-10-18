import styled from 'styled-components';
import { onTablet, onDesktop } from './mixins';

export const Container = styled.div`
  margin: 0 auto;
  padding: 24px 20px 0;
  max-width: 1440px;

   ${onTablet(`
    padding: 24px 40px 0;
  `)}

  ${onDesktop(`
    padding: 24px 130px 0;
  `)}
`;
