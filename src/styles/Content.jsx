import styled from 'styled-components';
import { onDesktop } from './mixins';

export const Content = styled.section`
  display: grid;
  gap: 24px;
  padding-bottom: 246px;
  padding-top: 63px;

  ${onDesktop(`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  `)}
`;
