/* @jsx createElement */

import { createDOM, createElement, render } from './react';

  function Title() {
    return <h1>React 만들기</h1>;
  }

  const vdom = <p>
    <Title></Title>
    <ul>
      <li style="color:red">1번</li>
      <li style="color:blue">2번</li>
      <li style="color:green">3번</li>
    </ul>
  </p>

render(vdom, document.querySelector('#root'));