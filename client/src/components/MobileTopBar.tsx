import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../utils/responsive';
import amit from '../assets/amit.jpg';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const MobileTopBar = () => {
  return (
    <Wrapper>
      <MobileNavContent>
        <UserAvatar
          style={{ marginRight: '8px' }}
          src={amit}
          className='user-avatar'
        />
        <SearchInputContainer>
          <SearchIcon className='search-icon' />
          <SearchInput placeholder='Search' />
        </SearchInputContainer>
        <UserPanel>
          <MessagesNavLink to='/messages'>
            <BadgeContainer>
              <Badge>12</Badge>
            </BadgeContainer>
            <MailOutlineIcon className='message-icon' />
          </MessagesNavLink>
        </UserPanel>
      </MobileNavContent>
    </Wrapper>
  );
};

export default MobileTopBar;

const Wrapper = styled.nav`
  display: none;
  width: 100%;
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  ${mobile({ display: 'flex' })}
  .search-icon {
    position: absolute;
    margin: 0 10px;
    color: rgb(0, 0, 0, 0.6);
  }
  .message-icon {
    color: rgb(0, 0, 0, 0.6);
    height: 30px;
    width: 30px;
  }
`;

const MobileNavContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-evenly;
  width: 100%;
`;

const SearchInput = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 0 40px;
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  width: 70%;
  position: relative;
`;

const UserPanel = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.img``;

const MessagesNavLink = styled(NavLink)`
  color: black;
  display: flex;
`;

const Badge = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 18px;
  background-color: rgba(217, 217, 217, 25%);
  border-radius: 50%;
  width: 18px;
  height: 18px;
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 12px;
  background-color: #f35e6a;
`;

const BadgeContainer = styled.div`
  position: absolute;
  top: 5px;
`;
