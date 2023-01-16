import styled from 'styled-components';
import amit from '../assets/amit.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import { mobile } from '../utils/responsive';
const Posts = () => {
  const TextExpander = (text: string) => {
    const [expanded, setExpanded] = useState(false);
    const truncatedText = text.slice(0, 350);
    const handleClick = () => setExpanded(!expanded);

    return (
      <div>
        {expanded ? text : truncatedText}
        {text.length >= 350 && (
          <span
            style={{ color: 'rgb(0,0,0,60%)', cursor: 'pointer' }}
            onClick={handleClick}
          >
            {expanded ? ' ...Show less' : ' ...Show more'}
          </span>
        )}
      </div>
    );
  };

  return (
    <Wrapper>
      <MainContent>
        <PostComposerContainer>
          <PostComposerImage src={amit} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <PostComposerName>Amit Shukrun</PostComposerName>
            <PostComposerDate>1d ago</PostComposerDate>
          </div>
        </PostComposerContainer>
        <PostDetails>
          {TextExpander(
            'loloasdasdasdasdasdasdasdasdasdsadasdasloasdasdasdasdasdasdasdasdasdsadasdasloasdasdasdasdasdasdasdasdasdsadasdasloasdasdasdasdasdasdasdasdasdsadasdasloasdasdasdasdasdasdasdasdasdsadasdasloasdasdasdasdasdasdasdasdasdsadasdasloasdasdasdasdasdasdasdasdasdsadasdasloasdasdasdasdasdasdasdasdasdsadasdasloasdasdasdasdasdasdasdasdasdsadasdasloasdasdasdasdasdasdasdasdasdsadasdasloasdasdasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdasdsadasdas'
          )}
        </PostDetails>
      </MainContent>
      <BottomPanelDiv>
        <FavoriteIcon />
        <Likes>32</Likes>
        <FavoriteIcon />
        <Likes>32</Likes>
        <FavoriteIcon />
        <Likes>32</Likes>
      </BottomPanelDiv>
    </Wrapper>
  );
};

export default Posts;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 75%;
  max-width: 650px;
  border-radius: 16px;
  margin-bottom: 1rem;
  min-height: 250px;
  border: 1px solid rgb(0, 0, 0, 10%);
  background-color: white;
  ${mobile({ width: '90%' })}
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow: hidden;
  word-wrap: break-word;
`;

const PostComposerContainer = styled.div`
  display: flex;
`;

const PostComposerName = styled.p`
  font-weight: 500;
`;
const PostComposerDate = styled.p`
  color: rgb(0, 0, 0, 30%);
`;
const PostComposerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const PostDetails = styled.p`
  margin-top: 1rem;
`;

const BottomPanelDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 0 2rem 2rem 2rem;
  //top right bottom left
`;
const Likes = styled.span`
  margin-right: 1rem;
`;
