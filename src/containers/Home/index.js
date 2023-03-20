import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"

import axios from "axios";
import Burguer from "../../assets/burguer1.svg";

import H1 from "../../componets/Title"
import Button from "../../componets/Button"
import {
  Body,
  Container,
  Image,
  ContainerItens,
  InputLabel,
  Input
} from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();

  const navigate = useNavigate()

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      pedido: inputOrder.current.value,
    });
    setOrders([
      ...orders,
      newOrder,
    ]);

    navigate("/pedidos")
  }

  return (
    <Body>
      <Container>
        <Image alt="logo-imagem" src={Burguer} />

        <H1>Faça seu pedido!</H1>

        <ContainerItens>
          <InputLabel>Pedido</InputLabel>
          <Input ref={inputOrder} placeholder="Seu pedido"></Input>

          <InputLabel>Nome do Cliente</InputLabel>
          <Input ref={inputName} placeholder="Seu nome"></Input>

          <Button onClick={addNewOrder}>Novo Pedido</Button>
        </ContainerItens>
      </Container>
    </Body>
  );
}

export default App;
