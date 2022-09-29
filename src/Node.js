let id = 0;

export default class Node {
  constructor(parent, children) {
    this.id = id++;
    this.children = children ? children : null;
    this.parent = parent ? parent : null;
  }

  replaceChild(child, newChild) {
    const index = this.children.findIndex((node) => node === child);
    if (index >= 0) {
      this.children[index] = newChild;
    }
  }

  split() {
    const node = new Node(this.parent);
    node.children = [this, new Node(node)];
    this.parent = node;
    if (node.parent) {
      node.parent.replaceChild(this, node);
    }
    return node;
  }

  remove() {
    const parent = this.parent;
    if (!parent) {
      return this;
    }
    const sibling = parent.children.find((child) => child !== this);
    sibling.parent = parent.parent;
    if (parent.parent) {
      parent.parent.replaceChild(parent, sibling);
    }
    this.reset();
    return sibling;
  }

  reset() {
    this.children = null;
    this.parent = null;
  }

  printTree() {
    let root = this;
    while (root && root.parent) {
      root = root.parent;
    }

    console.log(root);
  }
}
