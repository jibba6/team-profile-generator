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
    test ("this.name returns name" , ()=>{
        const name = "larry"
        const e = new Employee (name)
        expect(e.getName()).toBe(name)
    })
    test ("this.id returns id" , () => {
        const id = "123"
        const e = new Employee ("larry" , id)
        expect (e.getId()).toBe(id)
    })
    test ("this.email returns email" , () => {
        const email = "email"
        const e = new Employee ("name", "id", email)
        expect (e.getEmail()).toBe(email)
    })
    test("Employee" , () => {
        const Role = "Employee"
        const e = new Employee ("Employee")

    expect (e.getRole()).toBe("Employee")
    })
}) 
// need to finish the test routes that i have not completed yet 