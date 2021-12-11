function createDOM(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);

  node.children
    .map(createDOM)
    .forEach(element.appendChild.bind(element));

  return element;
}

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
          props: {},
          children: ["1번"],
        },
        {
          tag: 'li',
          props: {},
          children: ["2번"],
        },
        {
          tag: 'li',
          props: {},
          children: ["3번"],
        },
      ],
    },
  ],
};

document
  .querySelector('#root')
  .appendChild(createDOM(node));