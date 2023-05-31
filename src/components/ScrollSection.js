import styled from 'styled-components';
import Grid from './common/Grid';
import { Element } from 'react-scroll';

const ScrollSection = ({ name, content, includePadding }) => {
  return (
    <Section id={name} name={name} includepadding={includePadding}>
      <Grid paddingLeft={includePadding}>{content}</Grid>
    </Section>
  );
};

const Section = styled(Element).attrs((p) => ({
  includepadding: p.includepadding,
}))`
  min-height: 100vh;
  padding-block: ${(props) => (props.includepadding ? '2em 4em' : '0')};
  box-sizing: margin-box;
  max-width: 2000px;
  margin: 0 auto;

  &:nth-child(odd) {
    background-color: var(--bg-color);
  }
  &:nth-child(even) {
    background-color: var(--wtb);
  }
`;

export default ScrollSection;
