import styled from 'styled-components';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
const ComposePost = () => {
  return (
    <Wrapper>
      <PostCompositionContainer>
        <TopBarContainer>
          <Placeholder>Compose new post</Placeholder>
        </TopBarContainer>
        <BottomBarContainer>
          <PostTypesContainer>
            <PostType>
              <ImageIcon />
              <Text>Add Image</Text>
            </PostType>
            <PostType>
              <VideoCameraBackIcon />
              <Text>Add Video</Text>
            </PostType>
          </PostTypesContainer>
          <PublishButton>Publish</PublishButton>
        </BottomBarContainer>
      </PostCompositionContainer>
    </Wrapper>
  );
};

export default ComposePost;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;
`;

const PostCompositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  background-color: rgb(217, 217, 217, 20%);
  border-radius: 10px;
  height: 160px;
  transition: all 0.2s;

  &:hover {
    background-color: rgb(217, 217, 217, 40%);
  }
`;

const TopBarContainer = styled.div`
  display: flex;
  height: 50%;
  align-items: center;
  padding: 2rem 3rem;
  width: 100%;
  transition: all 0.2s;
`;

const BottomBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  height: 50%;
  width: 100%;
  border-top: 2px solid rgb(0, 0, 0, 5%);
`;

const PostTypesContainer = styled.div`
  display: flex;
  width: 50%;
`;

const PostType = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 0.2s;
  padding: 1rem;
  border-radius: 10px;
  &:hover {
    background-color: rgb(217, 217, 217, 30%);
  }
`;

const Text = styled.p`
  margin-left: 10px;
`;

const PublishButton = styled.button`
  display: flex;
  background-color: var(--clr-green-primary);
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  width: 125px;
  height: 35px;
  cursor: pointer;
  font-weight: 550;
  transition: all 0.2s;
  &:hover {
    background-color: var(--clr-green-primary-hover);
  }
`;

const Placeholder = styled.p`
  color: rgb(0, 0, 0, 50%);
`;
