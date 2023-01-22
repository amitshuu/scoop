import styled from 'styled-components';
import amit from '../assets/amit.jpg';
import test from '../assets/test.mp4';
import shinobu from '../assets/shinobu.jpg';
import { mobile } from '../utils/responsive';
import { useExpandableText } from '../utils/customHooks';
import SinglePostBottomBar from './SinglePostBottomBar';

type IProps = {
  postType?: 'image' | 'video';
};

const Posts: React.FC<IProps> = ({ postType }) => {
  const textLimit = postType ? 125 : 350;
  const { expanded, handleClick, initialText, truncatedText } =
    useExpandableText(
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem ea quaerat veritatis pariatur et error accusamus inventore repudiandae, illo velit deleniti soluta eligendi perspiciatis doloribus rerum. Dicta, nobis possimus!
  Consequatur possimus commodi, architecto qui nostrum velit explicabo quia eligendi rem? Ducimus eaque facilis illum, praesentium accusantium eveniet architecto, voluptatibus soluta dicta unde nemo totam quod sint, blanditiis enim inventore.`,
      textLimit
    );

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
          <span>{expanded ? initialText : truncatedText}</span>
          {initialText.length >= 350 && (
            <span
              style={{ color: 'rgb(0,0,0,60%)', cursor: 'pointer' }}
              onClick={handleClick}
            >
              {expanded ? ' ...Show Less' : ' ...Show More'}
            </span>
          )}
          {postType === 'image' ? (
            <Test>
              <PostImage src={amit} />
            </Test>
          ) : (
            postType === 'video' && (
              <video width='100%' controls>
                <source src={test} type='video/mp4' />
              </video>
            )
          )}
        </PostDetails>
      </MainContent>
      <SinglePostBottomBar />
    </Wrapper>
  );
};

export default Posts;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 650px;
  border-radius: 16px;
  margin-bottom: 1rem;
  min-height: 250px;
  border: 1px solid rgb(0, 0, 0, 10%);
  background-color: white;
  ${mobile({ width: '100%' })}
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1.5rem;
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
  font-size: 15px;
  font-weight: 400;
  line-height: 1.33333;
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;

const Test = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;
