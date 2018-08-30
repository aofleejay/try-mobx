import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import Card from './common/Card'

const Button = styled.button`
  display: inline-block;
  border: none;
  border-radius: 10px;
  padding: 10px 30px;
  margin: 0;
  background-color: white;
  cursor: pointer;
  outline: none;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
`

const Text = styled.p`
  margin-left: 50px;
  margin-right: 50px;
`

const Counter = observer(({ counterStore }) => (
  <Card >
    <Button onClick={counterStore.decrease}>-</Button>
    <Text>{counterStore.tick}</Text>
    <Button onClick={counterStore.increase}>+</Button>
  </Card>
))

export default Counter
