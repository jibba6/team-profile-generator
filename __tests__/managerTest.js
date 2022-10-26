const Manager = require("../lib/Manager")

describe("Manager constructor", () => {
    

    test("this.officeNumber returns officeNumber", () => {
        const officeNumber = "the officeNumber"
        const e = new Manager("name","id", "eamil", officeNumber)
        expect(e.officeNumber).toBe(officeNumber)
    })
    test("Manager", () => {
        const Role = "Manager"
        const e = new Manager("Manager")

        expect(e.getRole()).toBe("Manager")
    })
    test("this.officeNumber returns officeNumber", () => {
        const officeNumber = "officeNumber"
        const e = new Manager("name", "id","email", officeNumber)
        expect(e.getOfficeNumber()).toBe(officeNumber)
    })})