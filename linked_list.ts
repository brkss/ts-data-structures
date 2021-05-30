

class MyNode<T> {
  next: MyNode<T>;
  data: T;

  constructor(data?: T){
      this.data = data;
  }

} 

class LinkedList<T> {

  private head : MyNode<T>;
  private size : number;

  constructor(){
    this.size = 0;
  }

  append(data: T): void{
    if(!this.head){
      this.head = new MyNode<T>(data);
      this.size++;
      return;
    }
    let currentNode : MyNode<T> = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = new MyNode(data);
    this.size++;
    return;
  }

  //
  prepend(data: T) : void {
    
    const newHead : MyNode<T> = new MyNode<T>(data);
    newHead.next = this.head;
    this.head = newHead;
    this.size++;
    return;

  }

}



// tests 
const list : LinkedList<any> = new LinkedList<any>();
list.append(1);
list.append(3);
list.append(6)
console.log("list => ", list);


