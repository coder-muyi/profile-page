import styled from "styled-components";
import { devices } from "assets/data";

const Grid = styled.div`
  display: grid;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 18rem;
  }
`;

export default function gridjsx({ children }) {
  return (
    <Grid>
      <div style={{ justifyContent: "center", paddingInline: '2rem 1rem' }}>{children}</div>
      <div></div>
    </Grid>
  );
}
