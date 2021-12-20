/* @jsx createElement */

import { createElement, render } from './react';

  function Title(props) {
    return <h1>{ props.children }</h1>;
  }

  function Item(props) {
    return <li style={'color:${props.color}'}>{ props.children }</li>
  }

  const vdom = <p>
    <Title label="React">React 만들기 !</Title>
    <ul>
      <li style="color:red">1번째</li>
      <li style="color:blue">2번째</li>
      <li style="color:green">3번째</li>
    </ul>
  </p>

render(vdom, document.querySelector('#root'));