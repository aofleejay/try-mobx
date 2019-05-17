import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Counter from './Counter'
import CounterStore from '../stores/Counter'

it('Click increase, decrease button and display counter correctly.', () => {
  const { getByText } = render(<Counter counterStore={new CounterStore()} />)

  expect(getByText('0')).toBeInTheDocument()
  fireEvent.click(getByText('+'))
  expect(getByText('1')).toBeInTheDocument()
  fireEvent.click(getByText('-'))
  expect(getByText('0')).toBeInTheDocument()
})
