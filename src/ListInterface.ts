export default interface IList{
    length:number
    push(str:string):void
    pop():void
    getAt(id:number):string
    getFirst():string
    getLast():string
}
