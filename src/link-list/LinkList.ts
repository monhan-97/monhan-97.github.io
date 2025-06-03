import Node from "./Node";
class LinkList<T> {
  private head: Node<T> | null = null;

  private length: number = 0;

  constructor() {}

  /**
   * 添加链表内容
   * @param value
   */
  public add(value: T) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      // 一直找到最后一个为空的节点
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      // 将最后一个节点的next指向新节点
      current.next = newNode;
    }

    this.length++;
  }

  /**
   * 查找链表对应的内容
   * @param value
   * @returns
   */
  public find(value: T) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return current;
  }

  /**
   * 删除链表第一个匹配的内容
   * @param value
   */
  public remove(value: T) {
    if (!this.head) {
      return this.head;
    }

    // 如果是头部的节点 直接指向下一个节点
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next?.next;
        this.length--;
        return;
      }
      current = current.next;
    }
  }

  /**
   * 插入到某个元素之后
   * @param value
   */
  public insertAfter(value: T, targetNode: T) {
    let current = this.head;

    while (current) {
      if (current.value === targetNode) {
        const newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return;
      }
      current = current.next;
    }
  }

  public forEach(callback: (value: T, node: Node<T>) => void) {
    let current = this.head;
    while (current) {
      callback(current.value, current);
      current = current.next;
    }
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
    }
  }
}

export default LinkList;
