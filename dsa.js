function fibonacci(n){
    let fib=[0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    
    console.log(fib) 
    return fib;
}
const res = fibonacci(5)
console.log(res)


function factorial(n){
    let product =1
    for(let i=1;i<=n;i++){
        product *= i
    }
    return product
}
const res = factorial(4)
console.log(res)

function isPrime(n){
    if(n<2){
        return false
    }
    else{
        for(i=2;i<n;i++){
            if(n%i===0){
                return false
            }
        }
    }
    return true
}
const res = isPrime(4)
console.log(res)

function isPowerOfTwo(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2===0){
            return true
        }
        n=n/2
    }
    return false
}
const res = isPowerOfTwo(5)
console.log(res)

function recursionFibo(n){
   if(n==1){
       return 0
   }
   else if(n==2){
       return 1
   }
   else if(n>2){
       return recursionFibo(n-1)+recursionFibo(n-2)
   }
}
let n=7;
for(let i=1;i<=n;i++){
    console.log(recursionFibo(i))






let arr=[1,2,3,4,5]
let key =20

function linearSearch(arr,key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            return i
        }
    }
    return -1;
}

const res=linearSearch(arr,key)
console.log(res)



let arr=[1,2,3,4,5]
let key =8

function binarySearch(arr,key){
    if(arr.length===0){
        return -1
    }
    let left = 0;
    let right = arr.length-1;
    
    while(left<=right){
        let middle = Math.floor((left+right)/2);
        if(arr[middle]==key){
            return middle
        }
        if(key < arr[middle]){
            right = middle-1
        }
        else{
            left = middle+1
        }
    }
    return -1
}

const res=binarySearch(arr,key)
console.log(res)


let arr=[1,2,3,4,5]
let key =6

function binarySearch(arr,key){
    return search(arr,key,0,arr.length-1)
}

function search(arr,key,left,right){
    if(arr.length===0 || left>right){
        return -1
    }
    
    let middle = Math.floor((left+right)/2)
    if(key === arr[middle]){
        return middle
    }
    if(key<arr[middle]){
        return search(arr,key,left,middle-1)
    }else{
        return search(arr,key,middle+1,right)
    }
    return -1
}

const res=binarySearch(arr,key)
console.log(res)


let arr=[5,2,6,4,1]


function bubbleSort(arr){
    
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
    
}


const res=bubbleSort(arr)
console.log(res)



function pattern(m,n){
    let result = Array.from({length:m},()=>Array(n).fill(0))
    let num=1
    for(let col=0;col<n;col++){
        if(col%2===0){
            for(let row=0;row<m;row++){
                result[row][col]=num++
            }
        }else{
            for(let row=m-1;row>=0;row--){
                result[row][col]=num++
            }
        }
    }
    return result
}


const res=pattern(4,6)
console.log(res)

1 6 7
2 5 8
3 4 9


function pattern(m,n){
    let result = Array.from({length:m},()=>Array(n).fill(0))
    let num=1
    for(let row=m-1;row>=0;row--){
        if(row%2!==0){
            for(let col=0;col<n;col++){
                result[row][col]=num++
            }
        }else{
            for(let col=n-1;col>=0;col--){
                result[row][col]=num++
            }
        }
    }
    return result
}


const res=pattern(10,10)
console.log(res)
6 5 4
1 2 3




const insertionSort=(arr)=>{
    for(let i=1;i<arr.length;i++){
        let insertIndex=i
        let numberToInsert = arr[i];
        for(let j=i-1;j>=0;j--){
            if(arr[j]>numberToInsert){
                arr[j+1]=arr[j]
                insertIndex=j
            }else{
                break
            }
        }
        arr[insertIndex]=numberToInsert
    }
    return arr
}

const res = insertionSort([1,20,-3,8,3])

console.log(res)


const quickSort=(arr)=>{
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)] 
}

const res = quickSort([1,20,-3,8,3,90])

console.log(res)






const mergeSort=(arr)=>{
    if(arr.length<2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    let leftArray= arr.slice(0,mid)
    let rightArray= arr.slice(mid)
    
    return merge(mergeSort(leftArray),mergeSort(rightArray))
}
const merge=(left,right)=>{
    let sortedArry=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArry.push(left.shift())
        }else{
            sortedArry.push(right.shift())
        }
    }
    return [...sortedArry,...left,...right]
}

const res = mergeSort([1,20,-3,8,3,90,0,9,-0,8])

console.log(res)

const cartesianProduct=(a,b)=>{
    
    let arr = []//Array.from({length:a.length},()=>Array(b.length).fill(1))
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            arr.push([a[i],b[j]])
        }
    }
    return arr;
}

const res = cartesianProduct([1,2],[3,4,9])

console.log(res)

let arr =[1,2,3,4,5]
arr.splice(2,0,5)
console.log(arr)
arr.splice(2,2)
delete arr[0]
console.log(arr)
let ob=[
    {
    "w":0,
    "c":1
}]
let ar = Array.from(ob,(w)=>w)
console.log("ar",ar)

let obj={
    "name":"kashi",
    "age":50
}
console.log(obj)
delete obj.age
console.log(obj)
obj.get =()=>{
    console.log("hello")
}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
console.log(Object.entries(obj))
for(let o of Object.entries(obj)){
    console.log(o)
}


const set = new Set([1,2])
set.add(4)
set.has(4)
set.delete(4)
set.clear()
set.add({"a":2})
console.log(set,set.has(4),set.size)
for(let s of set){
    console.log(s)
}


const map = new Map([["a",1]])
map.set("c",3)
console.log(map,map.get('c'),map.has("c"))
for(const m of map){
    console.log(m)
}


class Stack {
    constructor(){
        this.items=[]
        this.count=0
    }
    
    push(element){
        this.items[this.count]=element
        this.count++;
        return this.items
    }
    pop(){
        this.count--
        let element = this.items[this.count]
        this.items.length=this.count
        return element;
    }
    peek(){
        if(this.count==0){
            throw Error("stack is empty")
        }
        return this.items[this.count-1]
    }
}
const stack = new Stack()
console.log(stack)

console.log(stack.push("1"))
console.log("peek",stack.peek())
console.log(stack.push("1"))
console.log(stack.pop())
console.log(stack.push("2"))


class Queue{
    constructor(){
        this.items=[]
        this.count=0
    }
    enqueue(ele){
        this.items[this.count]=ele
        this.count++
        return this.items
    }
    dequeue(){
        let ele = this.items[0]
        this.count--
        for(let i=1;i<=this.count;i++){
            this.items[i-1]=this.items[i]
        }
        return ele;
    }
    size(){
        return this.count
    }
    isEmpty(){
        return this.count ==0
    }
}
const queue = new Queue()

console.log(queue.enqueue("k"))
console.log(queue.enqueue("h"))
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.size("k"))
console.log(queue.isEmpty("k"))


class Queue{
    constructor(){
        this.items={}
        this.front=0
        this.rear=0
    }
    enqueue(ele){
        this.items[this.rear]=ele
        this.rear++
        return this.items
    }
    dequeue(){
        let ele = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return ele
    }
    size(){
        console.log(this.rear,this.front)
        return this.rear-this.front
    }
    isEmpty(){
        return this.rear-this.front == true
    }
    peek(){
        return this.items[this.front]
    }
    
}
const queue = new Queue()

console.log(queue.enqueue("k"))
console.log(queue.enqueue("h"))
console.log(queue.dequeue())
console.log(queue.enqueue("l"))
//console.log(queue.peek())

console.log(queue.size("k"))
console.log(queue.isEmpty("k"))





class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity =capacity;
        this.currentLength =0
        this.rear=-1
        this.front=-1
    }
    
    isFull(){
        console.log("this.capacity",this.capacity)
        console.log("this.currentLength",this.currentLength)
        return this.currentLength===this.capacity
    }
    isEmpty(){
        return this.currentLength===0
    }
    enqueue(ele){
        if(this.isFull()){
            console.log("queue is full")
        }else{
            this.rear = (this.rear+1)%this.capacity
            this.items[this.rear]= ele
            this.currentLength +=1
            if(this.front==-1){
                this.front = this.rear
            }
        }
        return this.items
    }
    dequeue(){
        
        if(this.isEmpty()){
            return console.log("queue is empty")
        }
        const ele = this.items[this.front]
        this.items[this.front]=null
        this.front = this.front +1
        this.currentLength -= 1
        if(this.isEmpty()){
            this.front =-1
            this.rear = -1
        }
        
        return ele
    }
    peek(){
        if(this.isEmpty()){
            console.log("queue is empty",this.currentLength)
        }else{
            return this.items[this.front]  
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("queue is empty",this.currentLength)
        }else{
            let i;
            let str =""
            for(i = this.front;i!=this.rear;i=((i+1)%this.capacity)){
                str += this.items[i]
            }
            str += this.items[i]
            console.log(str)
        }
       
    }
}

const circularQueue = new CircularQueue(5)
circularQueue.print()
console.log("isEmpty",circularQueue.isEmpty())
console.log("isFull",circularQueue.isFull())
console.log("peek",circularQueue.peek())

console.log("enqueue",circularQueue.enqueue(3))
console.log("enqueue",circularQueue.enqueue(3))
console.log("enqueue",circularQueue.enqueue(2))
console.log("enqueue",circularQueue.enqueue(3))

console.log("dequeue",circularQueue.dequeue())
console.log("enqueue",circularQueue.enqueue(9))
console.log("enqueue",circularQueue.enqueue(9))
circularQueue.print()


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size=0
    }
    
    isEmpty(){
        //onsole.log(this.size ===0)
        return this.size ===0
    }
    
    getSize(){
        //console.log(this.size)
        return this.size
    }
    
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.prepend(value)
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
            this.size++
        }
    }
    
    insert(value,index){
        if(index<0 && index>this.size){
            return null
        }
        if(index == 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
        
    }
    removeFrom(index){
        if(index<0 && index>this.size){
            return null
        }
        if(index ==0){
            let removeNode = this.head
            this.head = this.head.next
            this.size--
            return removeNode
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            let removeNode = prev.next
            prev.next = removeNode.next
            this.size--
            return removeNode
        }
    }
    
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value == value){
            let removeNode = this.head
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value != value){
                prev = prev.next
            }
            if(prev.next){
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }
    
    search(value){
        if(this.isEmpty()){
            return null
        }else{
            let i=0;
            let curr = this.head
            while(curr){
                if(curr.value==value){
                    return i
                }
                curr = curr.next
                i++
            }
            return -1
        }
    }
    
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head = prev
        
    }
    
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            let curr=this.head;
            let linkedList = ''
            while(curr){
                linkedList += `${curr.value} `
                curr = curr.next
            }
            console.log(`linked list size =>> ${this.size} and list ${linkedList}`)
        }
    }
}

const ll = new LinkedList()
ll.getSize()
ll.isEmpty()
ll.prepend(30)
ll.print()

ll.prepend(20)
ll.print()

ll.prepend(10)
ll.print()

ll.append(40)
ll.print()

ll.insert(50,1)
ll.print()

ll.removeFrom(0)
ll.print()

ll.removeFrom(2)
ll.print()

ll.removeValue(20)
ll.print()

ll.prepend(30)
ll.print()

ll.prepend(60)
ll.print()

ll.removeValue(50)
ll.print()

console.log("linked list search",ll.search(600))

ll.reverse()
ll.print()

const LongestSub=(s)=>{
    if(s.length<=1) return s.length;
    let max=0;
    let len =0
    let map = new Map()
    
    for(let i=len;i<s.length;i++){
        let curr = s[i]
        let prev = map.get(curr)
        
        if(prev >= len){
            console.log(curr,len)
            len = prev +1
            console.log("lll",curr, len)
        }
        
        map.set(curr,i)
        max = Math.max(max,i-len+1)
        console.log(map,max)
        
    }
    return max
}
const res = LongestSub('abcabcd')
console.log(res)


let num1=[1,3]
let num2 =[2,4]

const MergeArray=(num1,num2)=>{
    let sortedArry =[]

    
    while(num1.length && num2.length ){
        if(num1[0] < num2[0]){
            sortedArry.push(num1.shift())
        }else{
            sortedArry.push(num2.shift())
        }

    }
    sortedArry=[...sortedArry,...num1,...num2]
    let n = sortedArry.length
    let middle = Math.floor(n/2)
    if(n%2===0){
        return ((sortedArry[middle-1]+sortedArry[middle])/2)
    }else{
        return sortedArry[middle]
    }

}

const res = MergeArray(num1,num2)
console.log(res)


var reverse = function(x) {

    isNegative = (x<0)
    num = Math.abs(x)
    let reversed =0
    console.log(x,num)
    while(num>0){
        let digit = Math.floor(num%10);
        reversed = reversed * 10 +digit
        num = Math.floor(num/10)
    }
    

    reversed = (isNegative)? -reversed:reversed
   
    const MIN_INT_32 = -(2 ** 31);
    const MAX_INT_32 = (2 ** 31)-1;

    if(reversed > MIN_INT_32 || reversed<MAX_INT_32){
        return 0
    }
    
    return reversed
    
};

const res =reverse(1534236469)
console.log(res)

class Node{
    constructor(value){
        this.value = value
        this.left= null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    
    isEmpty(){
        return this.root == null
    }
    
    insert(value){
        const newNode = new Node(value)
        
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
        return this.root
    }
    
    insertNode(root,newNode){

        if(newNode.value < root.value){
            if(root.left == null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right == null){
                 root.right = newNode
            }else{
                 this.insertNode(root.right,newNode)
            }
        }
    }
    
    preOrder(root){
        if(root){
            console.log(`Preorder ${root.value}`)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(`inOrder ${root.value}`)
            this.inOrder(root.right)
        }
    }
    
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(`postOrder ${root.value}`)
        }
    }
    
    levelOrder(){
        let queue =[]
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(`levelOrder ${curr.value}`)
            
            if(curr.left){
                queue.push(curr.left)
            }
            
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    
    deleteNode(root,value){
        if(root===null){
            return root
        }
        
        if(value<root.value){
            //left defth
            root.left = this.deleteNode(root.left,value)
        }
        else if(value>root.value){
            //right defth
            root.right = this.deleteNode(root.right,value)
        }else{
            
            //no childs
            if(!root.left && !root.right){
                return null
            }
            
            //one child
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            
           root.value = this.min(root.right)
           root.right = this.deleteNode(root.right,root.value)
            
        }
        return root
    }
    
    search(root,value){
        if(this.isEmpty()){
            return false
        }else{
            if(root.value == value){
                return true
            }
            else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
       
    }
}

const bst = new BinarySearchTree()
console.log(bst.insert(10))

console.log(bst.insert(5))
console.log(bst.insert(3))

console.log(bst.insert(7))
console.log(bst.insert(15))
console.log(bst.preOrder(bst.root))
console.log(">>>>>>>>>>>>")
console.log(bst.inOrder(bst.root))
console.log(">>>>>>>>>>>>")
console.log(bst.postOrder(bst.root))


console.log(">>>>>>>>>>>>")
console.log(bst.levelOrder())

console.log(bst.delete(10))

console.log(">>>>>>>>>>>>")
console.log(bst.levelOrder())
console.log(bst.search(bst.root,15))

console.log("Min value==>",bst.min(bst.root))
console.log("Max value==>",bst.max(bst.root))

class Graph{
    constructor(){
        this.al ={}
    }
    
    addVertex(v){
        if(!this.al[v]){
            this.al[v]= new Set()
        }
        return this.al
    }
    
    addEdges(v1,v2){
        if(!this.al[v1]){
            this.addVertex(v1)
        }
        
        if(!this.al[v2]){
            this.addVertex[v2]
        }
        
        this.al[v1].add(v2)
        this.al[v2].add(v1)
    }
    
    hasEdge(v1,v2){
        return (this.al[v1].has(v2) && this.al[v2].has(v1))
    }
    
    removeEdge(v1,v2){
        this.al[v1].delete(v2)
        this.al[v2].delete(v1)
    }
    
    removeVertex(v){
        if(!this.al[v]){
            return
        }else{
            for(let adv in this.al){
                this.removeEdge(v, adv)
            }
            delete this.al[v]
        }
    }
    
    display(){
        for(let adv in this.al){
            console.log(`${adv} ==> ${[...this.al[adv]]}`)
        }
    }
    

}

const gh = new Graph()
console.log(gh.addVertex('A'))
console.log(gh.addVertex('B'))
console.log(gh.addVertex('C'))
gh.display()

console.log(gh.addEdges('A',"B"))
console.log(gh.addEdges('B',"C"))
gh.display()

console.log(gh.hasEdge('A','C'))
console.log(gh.hasEdge('A','B'))

console.log(gh.removeEdge('A','C'))
gh.display()

console.log(gh.removeVertex('C'))
gh.display()

var merge = function(nums1, m, nums2, n) {
    let p1 = m-1
    let p2 = n-1
    let p = m+n-1

    while(p1>=0 && p2>=0){
        if(nums1[p1]>nums2[p2]){
            nums1[p] = nums1[p1]
            p1--
        }else{
            nums1[p]=nums2[p2]
            p2--
        }
        p--
    }

    while(p2>=0){
        nums1[p]=nums2[p2]
        p2--
        p--
    }
    console.log(nums1)
    
};



function fibBottom(n){
    let fibBot =[0,1]


    for(i=2;i<=n;i++){
        fibBot[i] = fibBot[i-1] + fibBot[i-2]
    }
    
   return fibBot[n]
}

const resBottom= fibBottom(0)
console.log("resBottom",resBottom)

function fib(n,memo){
    if(n in memo){
        return memo[n]
    }
    if(n==0 || n==1){
        return memo[n]=n
    }
    if(n>=2){
        memo[n] = fib(n-1,memo) + fib(n-2,memo)
    }
    return memo[n]
}

const res = fib(6,{})
console.log("res",res)












