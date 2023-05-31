import styled from 'styled-components';

import { devices, sizes } from 'assets/data';
import { useWindowSize } from 'hooks/useWindowSize';

const StyledGrid = styled.div`
  display: grid;
  gap: 1rem;
  /* margin: 0 auto; */

  @media ${devices.tablet} {
    grid-template-columns: 1fr var(--grid-right-col);
    padding-left: ${(p) => p.pl && '2rem'};
  }
`;

export default function Grid({ children, paddingLeft }) {
  const { width } = useWindowSize();

  return width >= sizes.tablet ? (
    <StyledGrid pl={paddingLeft}>
      <div style={{ justifyContent: 'center' }}>{children}</div>
      <div></div>
    </StyledGrid>
  ) : (
    <>{children}</>
  );
}
