// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isEven: true, count: 0}

  changeCount = () => {
    this.setState(prevState => {
      const {count} = prevState

      const num = count + Math.ceil(Math.random() * 100)

      let numType

      if (num % 2 === 0) {
        numType = true
      } else {
        numType = false
      }

      return {isEven: numType, count: num}
    })
  }

  render() {
    const {isEven, count} = this.state

    const content = isEven ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Count {count}</h1>
          <div className="card-container1">
            <p>Count is {content}</p>
            <button
              onClick={this.changeCount}
              className="button-style"
              type="button"
            >
              Increment
            </button>
            <p>* Increase By Random Number Between 0 to 100 </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
