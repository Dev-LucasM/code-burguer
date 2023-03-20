import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  background-color: #363636;
`;

export const Container = styled.div`
  width: 414px;
  background-color: #0a0a10;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img``;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: rgba(255, 255, 255, 0.14);
  border: none;

  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin-bottom: 50px;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.6;
  }
`;

export const User = styled.li`
    color: #ffffff;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;

    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 101px;

    margin-bottom: 28px;
    
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding-left: 27px;
  }

  #p2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
  }

  #p1 {
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    padding-top: 8px;
  }

  button {
    background: none;
    border: none;
    padding-right: 40px;
    cursor: pointer;
  }
`
