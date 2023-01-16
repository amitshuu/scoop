import React from 'react';
import styled from 'styled-components';
import mhf from '../assets/Maccabi_Haifa_FC_Logo_2020.png';

const Groups = () => {
  return (
    <Warpper>
      <GroupsSpan>Groups:</GroupsSpan>
      <GroupsContainer>
        <Group>
          <GroupImage src={mhf} />
          <GroupName>Maccabi Haifa Fans</GroupName>
        </Group>
        <Group>
          <GroupImage src={mhf} />
          <GroupName>Maccabi Haifa Fans</GroupName>
        </Group>
        <Group>
          <GroupImage src={mhf} />
          <GroupName>Maccabi Haifa Fans</GroupName>
        </Group>
      </GroupsContainer>
    </Warpper>
  );
};

export default Groups;

const Warpper = styled.div`
  margin-top: 2rem;
`;
const GroupsSpan = styled.div`
  font-size: 22px;
  font-weight: 500;
  text-transform: uppercase;
`;

const GroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0px;
`;
const GroupImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
const GroupName = styled.span`
  margin-left: 10px;
  font-size: 15px;
`;
