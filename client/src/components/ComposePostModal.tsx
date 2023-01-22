import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import amit from '../assets/amit.jpg';
import CustomTextArea from './CustomTextArea';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';

type Props = {
  isOpen: boolean;
  onClose: any;
};

const ComposePostModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('disable-scroll');
    } else {
      document.body.classList.remove('disable-scroll');
    }
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <Wrapper onClick={onClose}>
          <Container onClick={(e) => e.stopPropagation()}>
            <Header>
              <HeaderText>Create a post</HeaderText>
            </Header>
            <UserDeatilsContainer>
              <UserPhoto src={amit} />
              <UserName>Amit Shukrun</UserName>
            </UserDeatilsContainer>
            <TextAreaContainer>
              <CustomTextArea
                onChange={setValue}
                value={value}
                placeholder='What do you want to talk about?'
                withBorder={false}
                withOverflow={true}
              />
            </TextAreaContainer>
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
              <PublishButton>Publish</PublishButton>
            </BottomBarContainer>
          </Container>
        </Wrapper>
      ) : null}
    </>
  );
};

export default ComposePostModal;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 35%;
  border-radius: 12px;
`;

const Header = styled.div`
  border-bottom: 1px solid rgb(0, 0, 0, 10%);
  padding: 1.5rem;
`;
const HeaderText = styled.p`
  font-weight: 400;
  font-size: 20px;
`;

const UserDeatilsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
`;
const UserName = styled.span`
  margin-left: 12px;
  font-weight: 500;
`;
const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const TextAreaContainer = styled.div`
  padding: 0rem 1rem 2rem 1rem;
`;

const BottomBarContainer = styled.div`
  display: flex;
  border-top: 1px solid rgb(0, 0, 0, 10%);
  width: 100%;
  justify-content: space-between;
  padding: 2rem 1.5rem;
`;
const PostType = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0.3rem 0.5rem;
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

const PublishButton = styled.button`
  width: 25%;
  outline: none;
  background-color: var(--clr-green-primary);
  border: 1px solid;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: var(--clr-green-primary-hover);
  }
`;
