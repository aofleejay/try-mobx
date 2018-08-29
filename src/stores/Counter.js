import { decorate, observable, action } from 'mobx'

class Counter {
  tick = 0

  increase = () => {
    this.tick += 1
  }

  decrease = () => {
    this.tick -= 1
  }
}

decorate(Counter, {
  tick: observable,
  increase: action,
  decrease: action,
})

export default Counter
