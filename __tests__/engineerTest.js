const Engineer = require("../lib/Engineer")
describe("Engineer constructor", () => {
    

    test("this.github returns github", () => {
        const github = "the github"
        const e = new Engineer("name","id", "eamil", github)
        expect(e.github).toBe(github)
    })
    test("Engineer", () => {
        const Role = "Engineer"
        const e = new Engineer("Engineer")

        expect(e.getRole()).toBe("Engineer")
    })
    test("this.github returns github", () => {
        const github = "github"
        const e = new Engineer("name", "id","email", github)
        expect(e.getGithub()).toBe(github)
    })})