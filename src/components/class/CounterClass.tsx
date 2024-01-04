import { Component } from 'react';

type CounterClassProps = {
  message: string
}

type CounterClassState = {
  count: number
}

// * The count value is 5.
export class CounterClass extends Component<CounterClassProps, CounterClassState> {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1}))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}
