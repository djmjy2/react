import { createDOM, render } from './react';

const node = {
  tag: 'P',
  props: {},
  children: [
    {
      tag: 'h1',
      props: {},
      children: ["React 만들기"],
    },
    {
      tag: 'ul',
      props: {},
      children: [
        {
          tag: 'li',
          props: {
            style: "color:red"
          },
          children: ["1번"],
        },
        {
          tag: 'li',
          props: {
            style: "color:blue"
          },
          children: ["2번"],
        },
        {
          tag: 'li',
          props: {
            style: "color:green"
          },
          children: ["3번"],
        },
      ],
    },
  ],
};

render(node, document.querySelector('#root'));