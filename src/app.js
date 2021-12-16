import { createDOM, createElement, render } from './react';

const vdom = createElement('p', {}, 
  createElement('h1', {}, "React 만들기"),
  createElement('ul', {}, 
    createElement('li', { style: "color:red" }, "1번"),
    createElement('li', { style: "color:blue" }, "2번"),
    createElement('li', { style: "color:green" }, "3번"),
    )
  );

render(vdom, document.querySelector('#root'));