

console.log('hola mundirijillo');

/* fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(data => console.log(data)); */

async function persona(){
    let resultado = await fetch('https://randomuser.me/api/?inc=name,cell,email,login,picture')
                            .then(response => response.json())
                            .then(data => console.log(data));
    console.log(resultado)
}

persona();