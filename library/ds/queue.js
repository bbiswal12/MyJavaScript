 export class Queue{
    collection=[];

    enqueue(value){
        return this.collection.push(value);
    }
    dequeue(){
        return this.collection.shift();
    }
}