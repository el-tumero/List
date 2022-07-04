import ItemInterface from "./ItemInterface";

export default class Item implements ItemInterface{

    private content:string
    private head:Item | undefined
    private tail:Item | undefined

    constructor(content:string, head?:Item, tail?:Item){
        this.content = content
        this.head = head
        this.tail = tail        
    }

    getContent(): string {
        return this.content
    }
    getHead(): Item | undefined {
        return this.head
    }
    getTail(): Item | undefined {
        return this.tail
    }

}