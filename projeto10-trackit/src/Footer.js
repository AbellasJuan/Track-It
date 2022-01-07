import styled from "styled-components"

export default function Footer(){
    return(
        <StyledFooter>
            <span>Hábitos</span>
            <div>Hoje</div>
            <span>Histórico</span>
        </StyledFooter>
    )
};

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;

    div {
    position: relative;
    bottom: 25px;
    min-width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 100%;
    z-index: 2;
    }

    span{    
        font-family: Lexend Deca;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;    
        margin: 22px 30px;
    }
`