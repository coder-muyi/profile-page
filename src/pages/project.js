import styled from 'styled-components/macro';
import { Link, useParams } from 'react-router-dom';

import Canvas from 'components/common/Canvas';
import ScrollSection from 'components/common/ScrollSection';
import Backdrop from 'components/Project/Backdrop';
import Footer from 'components/Footer';
import { useWindowSize } from 'hooks/useWindowSize';
import { useGetProjectDetails } from 'hooks/useGetProjectDetails';
import { useGetProjects } from 'hooks/useGetProjects';
import { devices } from 'assets/data';

const ProjectPage = () => {
  const dim = useWindowSize();
  const { projectId: id } = useParams();
  const { data } = useGetProjectDetails(id);
  const { data: projects } = useGetProjects();
  const otherProjects = projects?.filter((p) => p.projectDetail?.id !== id);

  return (
    <>
      <Fixed>
        <Canvas dimension={dim} />
      </Fixed>
      <Backdrop
        projectUrl={data?.project.url}
        imageUrl={data?.project.images[0].url}
      />
      <ScrollSection
        name="section"
        style={{
          backgroundColor: 'var(--wtb)',
          padding: '1rem',
          paddingBottom: '3rem',
          position: 'relative',
          zIndex: '1',
        }}
        includePadding
      >
        <StyledDiv>
          <h1 className="section-header title">
            <span>{data?.project.name}</span>
          </h1>
          <p>{data?.about}</p>
        </StyledDiv>
        <OtherImages>
          {data?.project.images.slice(1, 4).map((image) => (
            <img key={image.id} src={image.url} />
          ))}
        </OtherImages>
        <StyledDiv>
          <h2>Notable Features</h2>
          <ul>
            {data?.notableFeatures.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </StyledDiv>
        <StyledDiv>
          <h2>Some technology used</h2>
          <ul>
            {data?.techUsed.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <h2></h2>
        </StyledDiv>
        <StyledDiv>
          <h2>Other projects</h2>
          <CardContainer>
            {otherProjects?.map((p) => (
              <Card key={p.id} className="card">
                <Link to={`/project/${p.projectDetail?.id}`}>
                  <img src={p.images[0].url} alt="" />
                </Link>
                <Link to={`/project/${p.projectDetail?.id}`}>
                  <span>{p.name}</span>
                </Link>
              </Card>
            ))}
          </CardContainer>
        </StyledDiv>
      </ScrollSection>
      <Footer displaySocial />
    </>
  );
};

const OtherImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;

  img {
    width: 100%;
    max-width: 30rem;
    border-radius: 1rem;
    border: 5px solid var(--theme-color);
  }

  @media ${devices.laptop} {
    gap: 2rem;

    img {
      transform: rotate(10deg);
      :nth-child(1) {
        margin-bottom: 3rem;
      }
      :nth-child(2) {
        margin-top: 3rem;
      }
    }
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 18rem;
  border-bottom: 3px solid var(--theme-color);
  border-radius: 15px;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    background-position-y: top;
  }

  span {
    display: block;
    text-transform: capitalize;
    font-size: 1.3rem;
  }

  a {
    display: block;
    :hover {
      transform: scale(1.03);
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const StyledDiv = styled.div`
  max-width: 85ch;
  margin-inline: auto;

  .title {
    text-transform: capitalize;
    text-align: center;
    font-size: 2.5rem;

    span {
      position: relative;
      z-index: 1;
    }
  }

  p,
  ul {
    font-size: 1.4rem;
    max-width: 65ch;
    margin: 0 auto 3rem;
    padding-inline: 1rem;

    li {
      color: var(--paragraph-txt-color);
    }
  }
`;

const Fixed = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
`;

export default ProjectPage;
