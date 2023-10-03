class Node {
  constructor(value) {
    this.value = value
    this.Next = null
  }
}


class LinkList {
  constructor() {
    this.value = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  //TC: O(1)
  Prepend(value) {
    const node = new Node(value);0
    if (this.isEmpty()) {
      this.head = node
    } else {
      node.Next = this.head
      this.head = node
    }
    this.size++
  }

  //TC: O(n)
  Append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node
    } else {
      let prev = this.head
      while (prev.Next) {
        prev = prev.Next
      }
      prev.Next = node
    }
    this.size++
  }

  insert(value, index){
    if (index < 0 || index > this.size) {
      return
    }
    if (index === 0) {
      this.Prepend(value)
    }  
    else{
      const node = new Node(value)
      let prev = this.head
      for (let i = 0; i < index-1; i++) {
        prev = prev.Next
      }
      node.Next = prev.Next
      prev.Next = node
      this.size++
    }
  }

  remove(index){
    if (index < 0 || index >= this.size) {
      return null
    }
    let removenode
    if (index === 0) {
      removenode = this.head
      this.head = this.head.Next
    }  
    else{
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.Next
      }
      removenode = prev.Next
      prev.Next = removenode.Next
    }
    this.size--
    return removenode.value
    
  }

  removebyValue(value){
    if (this.isEmpty()) {
        return null
    }
    if (this.head.value === value) {
      this.head = this.head.Next
      this.size--
      return "removed value is:"+ value
    }
  }

  Print() {
    if (this.isEmpty()) {
      console.log("Link list is empty")
    } else {
      let curr = this.head
      let listValues = ''
      while (curr) {
        listValues += `${curr.value} `
        curr = curr.Next
      }
      console.log(listValues)
    }
  }


}

const llist = new LinkList();
//console.log('List is Empty: ', llist.isEmpty());
//console.log('List size is: ', llist.getSize());


llist.insert(10,0)
llist.insert(20,0)
llist.insert(30,1)
llist.insert(40,2)
llist.Print()


//console.log(llist.remove(0))
//llist.Print()

console.log(llist.removebyValue(10))
llist.Print()







