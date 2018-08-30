import React from 'react'
import { observer } from 'mobx-react'
import { Button, Card, Row, Col } from 'antd'

const Counter = observer(({ counterStore }) => (
  <Row type="flex" justify="center">
    <Col span={6}>
      <Card title="Counter">
        <Row type="flex" justify="center" align="middle">
          <Col span={8}>
            <Button type="primary" shape="circle" onClick={counterStore.decrease}>-</Button>
          </Col>
          <Col span={8}>
            <p>{counterStore.tick}</p>
          </Col>
          <Col span={8}>
            <Button type="primary" shape="circle" onClick={counterStore.increase}>+</Button>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
))

export default Counter
