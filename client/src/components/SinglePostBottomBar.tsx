import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import styled from 'styled-components';
import { useState } from 'react';
import SinglePostComment from './SinglePostComment';
import amit from '../assets/amit.jpg';
import CustomTextArea from './CustomTextArea';

const SinglePostBottomBar = () => {
  const [toggleComments, setToggleComments] = useState(false);
  const [commentValue, setCommentValue] = useState('');

  const toggleCommentsHandler = () => {
    setToggleComments((prevState) => !prevState);
  };
  return (
    <Wrapper>
      <BottomPanelIcons>
        <FavoriteIcon
          style={{ color: 'var(--clr-like-red)', cursor: 'pointer' }}
        />
        <Span>32</Span>
        <CommentOutlinedIcon
          onClick={toggleCommentsHandler}
          style={{ cursor: 'pointer' }}
        />
        <Span>12</Span>
        <BookmarkBorderOutlinedIcon style={{ cursor: 'pointer' }} />
        <Span>4</Span>
      </BottomPanelIcons>
      {toggleComments && (
        <>
          <InputContainer>
            <UserAvatar src={amit} className='user-avatar' />
            <TextAreaContainer>
              <CustomTextArea
                value={commentValue}
                onChange={setCommentValue}
                placeholder='Add a comment...'
                withOverflow={true}
                withBorder={false}
              />
            </TextAreaContainer>
          </InputContainer>
          <SinglePostComment />
          <SinglePostComment />
          <SinglePostComment />
        </>
      )}
    </Wrapper>
  );
};

export default SinglePostBottomBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0rem 2rem;

  min-height: 75px;
  border-top: 1px solid rgb(0, 0, 0, 10%);
`;

const Span = styled.span`
  margin-right: 2rem;
  margin-left: 0.5rem;
`;

const BottomPanelIcons = styled.div`
  margin: 2rem 0rem;
  display: flex;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-bottom: 2rem;
`;

const TextAreaContainer = styled.div`
  width: 100%;
  border: 2px solid rgb(217, 217, 217, 60%);
  border-radius: 16px;
  height: 100%;
`;

const UserAvatar = styled.img`
  margin-right: 1rem;
  align-self: start;
`;
