import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <HomeTitleContainer>
        <HomeTitle>Home</HomeTitle>
        <SortBySpan>Sort by:</SortBySpan>
      </HomeTitleContainer>
      <PostInputContainer>
        <PostInput />
      </PostInputContainer>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 5rem;
`;

const HomeTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const HomeTitle = styled.h1`
  font-weight: 600;
`;
const SortBySpan = styled.span``;

const PostInputContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  border-radius: 16px;
  height: 150px;
  width: 100%;
  background-color: rgb(217, 217, 217, 20%);
`;

const PostInput = styled.textarea`
  word-wrap: break-word;
  height: 65%;
  width: 100%;
  border: none;
  font-family: inherit;
  padding: 1rem 3rem;
  border-bottom: 2px solid rgb(0, 0, 0, 5%);
  background-color: transparent;
  outline: none;
`;
