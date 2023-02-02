import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import Test from './Test';
import amit from '../assets/amit.jpg';
import shinobu from '../assets/shinobu.jpg';
import CustomTextArea from './CustomTextArea';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';

type Props = {
  isOpen: boolean;
  onClose: React.MouseEventHandler<HTMLDivElement>;
};

const ComposePostModal: React.FC<Props> = ({ isOpen, onClose }) => {
  // const [value, setValue] = useState('');
  const [withImage, setWithImage] = useState(false);

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
            <CustomTextArea imageSrc={shinobu} />
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
  /* height: 100%; */
  /* overflow-y: scroll; */
  max-height: 650px;
  max-width: 550px;
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
  overflow: none;
  border: none;
  max-height: 350px;
  max-width: 550px;
  padding: 1.5rem;
`;

const BottomBarContainer = styled.div`
  display: flex;
  border-top: 1px solid rgb(0, 0, 0, 10%);
  width: 100%;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  position: sticky;
  bottom: 0;
  background-color: white;
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

const PostImageContainer = styled.div`
  display: flex;
  border: 2px solid blue;
  width: 100%;
`;
const PostImage = styled.img`
  max-height: 450px;
  width: 100%;
`;
