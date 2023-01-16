import styled from 'styled-components';
import { ComposePost, Posts } from '../components';

const Home = () => {
  return (
    <Wrapper>
      <ComposePost />
      <Posts />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
