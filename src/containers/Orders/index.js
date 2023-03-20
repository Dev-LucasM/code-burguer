import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

import axios from "axios";
import Pedido from "../../assets/burguer.svg";
import Trash from "../../assets/trash.svg";

import H1 from "../../componets/Title"
import Button from "../../componets/Button"
import {
  Body,
  Container,
  Image,
  ContainerItens,
  User
} from "./styles";

function Orders() {
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/users"
      );
      setOrders(newOrders);
    }
    fetchUsers();
  }, []);

  async function deleteOrder(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newOrders = orders.filter((user) => user.id !== userId);

    setOrders(newOrders);
  }

  function goBackPage() {
    navigate("/")
  }

  return (
    <Body>
      <Container>
        <Image alt="logo-imagem" src={Pedido} />

        <H1>Pedidos</H1>

        <ContainerItens>
          <ul>
            {orders.map((order) => (
              <User key={orders.id}>
                <div>
                  <p id="p1">{order.pedido}</p>
                  <p id="p2">{order.name}</p>
                </div>
                <button onClick={() => deleteOrder(order.id)}>
                  <Image src={Trash} />
                </button>
              </User>
            ))}
          </ul>
          
          <Button isBack={true} onClick={goBackPage}>Voltar</Button>
        </ContainerItens>
      </Container>
    </Body>
  );
}

export default Orders;
