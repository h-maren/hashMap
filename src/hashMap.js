import { LinkedList } from "./linkedlist";

class HashMap {
    constructor() {
        this.buckets=[];
    }
    hash(key) {
        let hashCode=0;
        const primeNumber=31;
        for(let i=0; i<key.length; i++){
            hashCode=primeNumber*hashCode+key.charCodeAt(i);
        }
        return hashCode;
    }
    set(key,value){
        //each bucket will be a linked list
        let hashCode = this.hash(key);
        if (this.buckets[hashCode]==null){
            this.buckets[hashCode] = new LinkedList();
        }
        this.buckets[hashCode].append(key,value);
    }
    get(key){
        let hashCode=this.hash(key);
        let storedList=this.buckets[hashCode];
        if(storedList===undefined){
            return null;
        } else {
            return storedList.get(key);
        }
    }
    has(key){
        let hashCode=this.hash(key);
        let storedList=this.buckets[hashCode];
        console.log(storedList)
        if(storedList){
            return true;
        } else {
            return false;
        }
    }
    //NEED TO FIX
    remove(key){
       let hashCode=this.hash(key);
       let storedList=this.buckets[hashCode];
       let checkList=storedList.remove(key);
       console.log(checkList);
        /*if(storedList){
            this.buckets[hashCode].remove(key);
        } else {
            return false;
        }*/
    }
}

export { HashMap }