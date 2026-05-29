import styled from 'styled-components';
import React, {useContext} from "react";
import { useUserStore } from "../../../Providers/UserProvider"
export const UserIconWithName = (props) => {
  const { img, name } = props;
  
  
  const { userInfo, setUserInfo } = useUserStore();
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  
  return (
    <SContainer>
      <SImage width={160} height={160} src={img} alt={name} />
      <SName>{name}</SName>
      {isAdmin ? <SSpan>編集</SSpan>: false}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align:center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SSpan = styled.span` 
  color: #ddd;
  cursor: pointer;
  text-decoration: underline;
`;