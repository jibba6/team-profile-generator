const genManagers = (member) => {
    const html = []
    member.forEach(emp => {
   html.push(`<div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">Manager: ${emp.name}</h5>
     <p class="card-text">ID: ${emp.id}</p>
     <p class="card-text">Email: ${emp.email}</p>
     <p class="card-text">Office Number: ${emp.officeNumber}</p>
   </div>
 </div>`)     
    });
    return html.join("")
}
const genInterns = (member) => {
    const html = []
    member.forEach(emp => {
   html.push(`<div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">Intern: ${emp.name}</h5>
     <p class="card-text">ID: ${emp.id}</p>
     <p class="card-text">Email: ${emp.email}</p>
     <p class="card-text">School: ${emp.school}</p>
   </div>
 </div>`)     
    });
    return html.join("")
}
const genEngineers = (member) => {
    const html = []
    member.forEach(emp => {
   html.push(`<div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">Engineer: ${emp.name}</h5>
     <p class="card-text">ID: ${emp.id}</p>
     <p class="card-text">Email: ${emp.email}</p>
     <p class="card-text">Github: ${emp.github}</p>
   </div>
 </div>`)     
    });
    return html.join("")
}
const genHtml = (data) => {
return `<!DOCTYPE html>
<html lang="en">

<head>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
${genManagers(data.filter(emp => emp.getRole() === "Manager"))}
${genInterns(data.filter(emp => emp.getRole() === "Intern"))}
${genEngineers(data.filter(emp => emp.getRole() === "Engineer"))}
</body>

</html>`
} 
module.exports = genHtml