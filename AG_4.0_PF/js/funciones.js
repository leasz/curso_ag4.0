console.log("Funcionando");

// const persona = JSON.parse(random_user);
// console.log(persona);

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => console.log(json))


// const persona = JSON.stringify(json);
// console.log(persona);