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
            <CustomTextArea value={commentValue} onChange={setCommentValue} />
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
  width: 100%;
  padding: 0rem 2rem;
  min-height: 75px;
  border-top: 1px solid rgb(0, 0, 0, 10%);
  justify-content: center;
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
  align-items: center;
  margin-bottom: 2rem;
`;

const UserAvatar = styled.img`
  margin-right: 1rem;
  align-self: start;
`;
