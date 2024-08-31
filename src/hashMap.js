import { LinkedList } from "./linkedlist";

class HashMap {
    constructor(size=16) {
        this.buckets=[];
        this.size=size; 
    }
    hash(key,hashSize) {
        let hashCode=0;
        const primeNumber=31;
        for(let i=0; i<key.length; i++){
            hashCode=(primeNumber*hashCode+key.charCodeAt(i)) % hashSize;
        }
        return hashCode;
    }
    resize () {
        let newHashSize = this.size*2;
        let newHashMap = new HashMap(newHashSize);
        console.log(newHashMap.size);
        this.buckets.forEach((bucket) => {
            if(bucket){
                let currentNode=bucket.head;
                console.log(currentNode);
                while(currentNode){
                    let nodeValue=currentNode.data;
                    let nodeKey=currentNode.key
                    let hashIndex=this.hash(nodeKey,newHashSize);
                    if (!newHashMap.buckets[hashIndex]){
                        newHashMap.buckets[hashIndex] = new LinkedList();
                    }
                    newHashMap.buckets[hashIndex].append(nodeKey,nodeValue);
                    currentNode=currentNode.nextNode;
                }
            }
        })
        console.log(newHashMap);
        this.buckets=newHashMap.buckets;
        this.size=newHashMap.size;
    }
    set(key,value){
        //each bucket will be a linked list
        let tableSize=this.size;
        let hashIndex = this.hash(key,tableSize);
        let loadFactor = (this.length()+1)/this.size;
        console.log(loadFactor);
        if(loadFactor>0.75){
            this.resize();
        }
        //console.log(this.length());
        //console.log(this.size);
        //console.log(loadFactor);
        if (!this.buckets[hashIndex]){
            this.buckets[hashIndex] = new LinkedList();
        }
        this.buckets[hashIndex].append(key,value);
    }
    get(key){
        let tableSize=this.size;
        let hashIndex=this.hash(key,tableSize);
        let storedList=this.buckets[hashIndex];
        if(storedList===undefined){
            return null;
        } else {
            return storedList.get(key);
        }
    }
    has(key){
        let tableSize=this.size;
        let hashIndex=this.hash(key,tableSize);
        let storedList=this.buckets[hashIndex];
       // console.log(storedList)
        if(storedList){
            //console.log(storedList.size);
            return true;
        } else {
            return false;
        }
    }
    remove(key){
        let tableSize=this.size;
       let hashIndex=this.hash(key,tableSize);
       let storedList=this.buckets[hashIndex];
       let checkList=storedList.remove(key);
       //console.log(storedList);
       //console.log(checkList);
       if(storedList.size===0){
        this.buckets[hashIndex]=null;
       }
    }
    length(){
        let count=0;
        this.buckets.forEach((bucket)=> {
            let currentNode=bucket.head;
            while(currentNode){
                if(currentNode.key){
                    count++;
                }
                currentNode=currentNode.nextNode;
            }
        });
        return count;
    }
    clear() {
        this.buckets.forEach((bucket) => {
            //console.log(bucket);
            let currentNode=bucket.head;
            while(currentNode){
                currentNode.data=null;
                currentNode.key=null;
                currentNode=currentNode.nextNode;
                bucket.size--;
            }
            bucket.head=null;
            bucket=null;
        });
    }
    keys(){
        let keyArray=[];
        this.buckets.forEach((bucket)=> {
            let currentNode=bucket.head;
            while(currentNode){
                keyArray.push(currentNode.key);
                currentNode=currentNode.nextNode
            }
        })
        return keyArray;
    }
    values(){
        let valueArray=[];
        this.buckets.forEach((bucket)=> {
            let currentNode=bucket.head;
            while(currentNode){
                valueArray.push(currentNode.data);
                currentNode=currentNode.nextNode;
            }
        });
        return valueArray;
    }
    entries(){
        let entryArray=[];
        this.buckets.forEach((bucket)=> {
            let currentNode=bucket.head;
            while(currentNode){
                entryArray.push([currentNode.key,currentNode.data]);
                currentNode=currentNode.nextNode;
            }
        });
        return entryArray;
    }
}

export { HashMap }