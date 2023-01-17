import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Suggestions from './Suggestions';
import Groups from './Groups';
import { mobile } from '../utils/responsive';

const RightSidebar = () => {
  return (
    <Wrapper>
      <MainContentDiv>
        <SearchInputDiv>
          <SearchInput placeholder='Search' />
          <SearchIcon className='search-icon' />
        </SearchInputDiv>
        <Suggestions />
        <Groups />
      </MainContentDiv>
    </Wrapper>
  );
};

export default RightSidebar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  .search-icon {
    position: absolute;
    right: 10px;
  }
  ${mobile({ display: 'none' })}
`;

const MainContentDiv = styled.div`
  padding: 3rem 4rem;

  height: 100%;
  border-left: 2px solid rgb(0, 0, 0, 10%);
`;

const SearchInputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

const SearchInput = styled.input`
  border-radius: 16px;
  outline: none;
  border: none;
  width: 100%;
  padding: 20px;
  font-weight: 400;
  height: 40px;
  background-color: #ffffffaf;
`;
