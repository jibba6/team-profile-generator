const Intern = require ("../lib/intern.js")


 describe("Intern constructor", () => {

    test("this.school returns school", () => {
        const school = "the school"
        const e = new Intern("name","id","email",school)
        expect(e.school).toBe(school)
    })
    test("Intern" , () => {
        const e = new Intern ()
        expect(e.getRole()).toBe("Intern")
    })
 })