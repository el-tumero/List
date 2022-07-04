import Item from "./Item"

export default interface IItem{
    getContent():string
    getHead():Item | undefined
    getTail():Item | undefined // is always undefined
}