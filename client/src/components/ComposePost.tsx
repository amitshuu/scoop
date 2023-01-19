import styled from 'styled-components';
import amit from '../assets/amit.jpg';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { mobile } from '../utils/responsive';
const ComposePost = () => {
  return (
    <Wrapper>
      <HomeTitleContainer>
        <HomeTitle>Home</HomeTitle>
        <SortBySpan>Sort by:</SortBySpan>
      </HomeTitleContainer>
      <Container>
        <TopBarContainer>
          <AvatarImage src={amit} />
          <PostComposingDiv>
            <Placeholder>What do you want to share Amit?</Placeholder>
          </PostComposingDiv>
        </TopBarContainer>
        <BottomBarContainer>
          <PostType>
            <ImageIcon
              style={{
                color: 'var(--clr-green-primary)',
              }}
            />
            <Text>Add Image</Text>
          </PostType>
          <PostType>
            <VideoCameraBackIcon style={{ color: 'var(--clr-like-red)' }} />
            <Text>Add Video</Text>
          </PostType>
        </BottomBarContainer>
      </Container>
    </Wrapper>
  );
};

export default ComposePost;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  width: 100%;
  ${mobile({ marginTop: '0rem' })}
`;

const HomeTitleContainer = styled.div`
  max-width: 650px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${mobile({ display: 'none' })}
`;
const HomeTitle = styled.h1`
  font-weight: 600;
`;

const SortBySpan = styled.span``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(0, 0, 0, 10%);
  width: 100%;
  max-width: 650px;
  margin-top: 2rem;
  background-color: white;
  border-radius: 16px;
  ${mobile({ width: '100%' })}
`;

const TopBarContainer = styled.div`
  display: flex;
  max-height: 80px;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 0rem;
  width: 100%;
  transition: all 0.2s;
`;

const BottomBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  max-height: 80px;
  width: 100%;
  border-top: 2px solid rgb(0, 0, 0, 5%);
`;

const PostComposingDiv = styled.div`
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 16px;
  height: 50px;
  width: 70%;
  transition: all 0.2s;
  &:hover {
    background-color: #d5d7db9e;
  }
`;

const AvatarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Placeholder = styled.span`
  color: rgba(0, 0, 0, 60%);
  margin-left: 2rem;
  letter-spacing: 0.5px;
`;

const PostType = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0rem 1rem;
  height: 50px;
  align-items: center;
  border-radius: 10px;
  &:hover {
    border-radius: 1rem;
    background-color: #d5d7db9e;
  }
`;

const Text = styled.p`
  margin-left: 10px;
  color: rgba(0, 0, 0, 60%);
  font-weight: 500;
`;
