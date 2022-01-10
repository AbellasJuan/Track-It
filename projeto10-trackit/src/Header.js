import styled from "styled-components";
import UserContext from "./Context/UserContext.js";
import { useContext } from "react";

export default function Header() {
  
   const { user } = useContext(UserContext);
   
    return (
      <StyledHeader>
        <h1>Trackit</h1>
        <img src={user.image} alt="" />
      </StyledHeader>
    );
}
  
  const StyledHeader = styled.div`
    font-family: 'Playball', cursive;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1 {
      margin-left: 15px;
      font-size: 40px;
      color: #FFFFFF;
    }
    
    img {
      margin-right: 15px;
      width: 51px;
      height: 51px;
      border-radius: 25px;
    }
  `;