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
`;

export const InputLabel = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #eeeeee;

  padding: 10px;
  margin-bottom: 1px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);

  border-radius: 14px;
  border: none;
  outline: none;

  padding: 10px;
  margin-bottom: 42px;

  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;
