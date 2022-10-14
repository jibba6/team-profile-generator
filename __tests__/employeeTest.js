const Employee = require("../lib/Employee")

describe("Employee constructor" , ()=>{
    test("See if the constructor returns an object" , ()=>{
        const e = new Employee ()
        expect (typeof(e)).toBe("object")
    })
    test ("this.name returns name" , ()=>{
        const name = "larry"
        const e = new Employee (name)
        expect(e.name).toBe(name)
    })
    test ("this.id returns id" , () => {
        const id = "123"
        const e = new Employee ("larry" , id)
        expect (e.id).toBe(id)
    })
}) 
//e.getName()