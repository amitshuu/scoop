import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import styled from 'styled-components';
import { useState } from 'react';
import CommentSection from './CommentSection';

const SinglePostBottomBar = () => {
  const [toggleComments, setToggleComments] = useState(false);

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
      {toggleComments ? (
        <CommentSection toggleComments={toggleComments} />
      ) : null}
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
