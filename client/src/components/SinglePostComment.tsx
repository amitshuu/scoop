import React from 'react';
import styled from 'styled-components';
import amit from '../assets/amit.jpg';
import { useExpandableText } from '../utils/customHooks';

const SinglePostComment = () => {
  const textLimit = 150;

  const { expanded, handleClick, initialText, truncatedText } =
    useExpandableText(
      `Lorem ipsum dolor sit amet consectetur adipisicing elit,
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laborum nam non ut. Pariatur sed, deleniti necessitatibus,
         accusantium placeat omnis veritatis quis, earum in suscipit reiciendis molestias ipsa est sequi ea.`,
      textLimit
    );

  return (
    <CommentsBar>
      <UserCommentContainer>
        <UserAvatar src={amit} className='user-avatar' />
        <CommentContentContainer>
          <div style={{ display: 'flex' }}>
            <UserName>Amit Shukrun</UserName>
            <CommentDate>17h</CommentDate>
          </div>

          <CommentText>
            <span>{expanded ? initialText : truncatedText}</span>
            {initialText.length >= 150 && (
              <span
                style={{ color: 'rgb(0,0,0,60%)', cursor: 'pointer' }}
                onClick={handleClick}
              >
                {expanded ? ' ...Show Less' : ' ...Show More'}
              </span>
            )}
          </CommentText>
        </CommentContentContainer>
      </UserCommentContainer>
    </CommentsBar>
  );
};

export default SinglePostComment;
const CommentsBar = styled.div``;

const UserAvatar = styled.img`
  margin-right: 1rem;
`;

const UserCommentContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  overflow: hidden;
  word-wrap: break-word;
`;
const CommentContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f0f2f5;
  padding: 1rem;
  border-radius: 16px;
`;
const UserName = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const CommentDate = styled.span`
  font-size: 14px;
  margin-left: 0.5rem;
  color: rgba(0, 0, 0, 0.6);
`;

const CommentText = styled.p`
  color: #050505;
  font-weight: 400;
  font-size: 15px;
`;
