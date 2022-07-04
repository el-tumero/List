import ListInterface from "./ListInterface"
import Item from "./Item"

export default class List implements ListInterface{
    private head:Item | undefined
    private tail:Item | undefined
    public length:number

    constructor(){
        this.length = 0
    }

    getFirst(): string {
        if(this.head === undefined) return "empty"
        return this.head.getContent()
    }
    getLast(): string {
        if(this.tail === undefined) return "empty"
        return this.tail.getContent()
    }

    getAt(id:number): string {
        if(id < 0) throw new Error("Index less than 0!!!")
        if(this.tail === undefined) throw new Error("List is empty!")
        if(id > this.length - 1) throw new Error("Out of range!")
        let lastItem:Item = this.tail
        for (let i = 0; i < this.length - id - 1; i++) {
            // if(lastItem.getHead() === undefined) throw new Error("Out of range!")
            lastItem = lastItem.getHead()!            
        }
        return lastItem.getContent()
    }


    push(str:string): void {
        if(this.length === 0){
            const firstItem = new Item(str)
            this.head = firstItem
            this.tail = firstItem
            this.length++
            return
        }
    
        this.tail = new Item(str, this.tail)
        this.length++
    }
    pop(): void {
        if(this.tail === undefined){
            console.log("List is empty!")
            return
        }

        if(this.tail === this.head) this.head = undefined

        this.tail = this.tail.getHead()
        
    }

    
}

