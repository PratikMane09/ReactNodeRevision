export var msg="hello"
export function add()
{
    var a =parseInt(prompt("enetr 1 no"))
    var b =parseInt(prompt("enetr 2 no"))
    return a+b
}

export class student
{
    constructor (rno,name,address)
    {
        this.no=rno
        this.name=name
        this.address=address
    }
    display()
    {
        return `Roll no:${this.rno} name:${this.name}`
    }

}
export default function ()
{
    return "javascript modules"
}
// we can add al export in but remove all export
// export add,student,msg