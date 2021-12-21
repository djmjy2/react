/* @jsx createElement */

import { createElement, render, Component } from './react';

class Title extends Component {
  render() {
    return <h1>{ this.props.children }</h1>;
  }
}

 function Item(props) {
    return <li style={'color:${props.color}'}>{ props.children }</li>
}

const App = () => <p>
  <Title label="React">React 클래스컴포넌트 만들기 !</Title>
  <ul>
    <li style="color:red">1번째</li>
    <li style="color:blue">2번째</li>
    <li style="color:green">3번째</li>
  </ul>
</p>

render(<App />, document.querySelector('#root'));