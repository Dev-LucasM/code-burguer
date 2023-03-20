import styled from "styled-components"

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: ${ rest => rest.isBack ? "rgba(255, 255, 255, 0.14)" : "#d93856"};
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