class Node {
  constructor(value) {
    this.value = value
    this.Next = null
  }
}

class LinkList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  //TC: O(1)
  prepand(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
      this.tail = node
    }else{
      node.Next = this.head
      this.head = node
    }
    this.size++    
  }
  
  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
      this.tail = node
    }else{
      this.tail.Next = node
      this.tail = node
    }
    this.size++    
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
debugger

llist.append(10,0)
llist.append(20,0)
llist.prepand(30,1)
llist.prepand(40,2)
llist.Print()