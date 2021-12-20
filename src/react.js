
export function createDOM(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  
  const element = document.createElement(node.tag);

  Object.entries(node.props)
    .forEach(([name, value]) => element.setAttribute(name, value));

  node.children
    .map(createDOM)
    .forEach(element.appendChild.bind(element));

  return element;
}

export function createElement(tag, props, ...children) {
  props = props || {};

  if(typeof tag === 'function') {
    return tag();
  } else {
    return {tag, props, children }
  }
}
export function render(node, container) {
  container.appendChild(createDOM(node));
}