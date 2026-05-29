import styled from 'styled-components';
import { SecoundaryButton } from "../atoms/SecoundaryButton";
import {useNavigate} from "react-router-dom";
import React, { useContext } from "react"
import { useUserStore } from "../../Providers/UserProvider"

export const Top = () => {
    const navigate = useNavigate();
    const { setUserInfo } = useUserStore();
    
    const onClickAdmin = () =>{
      setUserInfo({isAdmin: true});
      navigate("/users")
    }

    const onClickGeneral = () => {
      setUserInfo({isAdmin: false});
      navigate("/users")
    }
  return (
    <SContainer>
      <h1>TOPページです</h1>
      <SecoundaryButton onClick={onClickAdmin}>管理人ログイン</SecoundaryButton>
      <br />
      <SecoundaryButton onClick={onClickGeneral}>一般ログイン</SecoundaryButton>
    </SContainer>
  
  );
};
const SContainer = styled.div`
 text-align: center;
 `;
