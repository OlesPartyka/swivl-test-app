export const onDesktop = (styles) => `
  @media (min-width: 1024px) {
    ${styles}
  }
`;

export const onTablet = (styles) => `
  @media (min-width: 744px) {
    ${styles}
  }
`;
