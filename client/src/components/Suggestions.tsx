import React from 'react';
import styled from 'styled-components';
import amit from '../assets/amit.jpg';

const Suggestions = () => {
  return (
    <Wrapper>
      <SuggestionsSpan>SUGGESTIONS:</SuggestionsSpan>
      <SuggestionsUsersDiv>
        <SuggestionUser>
          <UserAvatar src={amit} />
          <UserName>Amit</UserName>
        </SuggestionUser>
        <SuggestionUser>
          <UserAvatar src={amit} />
          <UserName>Amit</UserName>
        </SuggestionUser>
        <SuggestionUser>
          <UserAvatar src={amit} />
          <UserName>Amit</UserName>
        </SuggestionUser>
        <SuggestionUser>
          <UserAvatar src={amit} />
          <UserName>Amit</UserName>
        </SuggestionUser>
      </SuggestionsUsersDiv>
    </Wrapper>
  );
};

export default Suggestions;

const Wrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SuggestionsSpan = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

const SuggestionsUsersDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2rem;
`;
const SuggestionUser = styled.div`
  display: flex;
  flex: 50%;
  flex-direction: column;
  padding: 15px 0;
`;
const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const UserName = styled.span`
  margin-left: 6px;
`;
