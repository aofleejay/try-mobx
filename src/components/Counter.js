import React from 'react'
import { observer } from 'mobx-react'
import { Button, Card, Row, Col } from 'antd'

const Counter = observer(({ counterStore }) => (
  <div>
    <Button type="primary" shape="circle" onClick={counterStore.decrease}>
      -
    </Button>

    <p>{counterStore.tick}</p>
    <Button type="primary" shape="circle" onClick={counterStore.increase}>
      +
    </Button>
  </div>
))

export default Counter
