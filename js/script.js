//PRIMERO CAPTURAMOS EL ID DEL INDEX AL JS
const listaUsuarios = document.getElementById("listaUsuarios");
//HACEMOS CONSOLE.LOG PARA VER SI ESTA TODO OK
console.log(listaUsuarios);
//HACEMOS OTRA VARIBALE DONDE COLOCAMOS LA URL
const url = "https://jsonplaceholder.typicode.com/users";

//LEEMOS LOS USUARIOS CON FETCH
function obtenerUsuarios() {
    fetch(url)
    .then((response) => {
        if (!response.ok){
        throw "Solicitud sin respuesta error"    
    }
    return response.json();
})
.then ((arrUsuarios) => {
    mostrarUsuarios(arrUsuarios);
})
.catch(error => {
    console.error("Error: ", error);
});

}
//añadimos name, age, username, img, phone, email, company,
// address tendrá estos datos como valor: usuario.address.street,
//usuario.address.suite, usuario.address.city
function mostrarUsuarios(arrUsuarios) {

    arrUsuarios.forEach((usuario) => {
//Edad aleatoriamente
let edadUsuario = Math.floor((Math.random() * (40 - 20 + 1)) + 20);
console.log("edad: ", edadUsuario)
console.log(usuario)

//Destructuring del objeto usuario
const {id, name, username, phone, email, company, address} = usuario;
const imgUsuario = `../assets/img/${id}.jpeg`
//const imgUsuario = `/../js/  ./assets/${id}.png

//spread operator. Crea un nuevo array con el objeto y con los nuevos datos a añadir (age, img, address con los nuevos datos)
const nuevoUsuario = {
    ...usuario, 
    imgUsuario:`../assets/img/${id}.jpeg`,
    edadUsuario: edadUsuario
};
console.log(nuevoUsuario);

const liElement = document.createElement("li");
liElement.classList.add("item");

const divCard = document.createElement("div");
divCard.classList.add("divCard");

//E n este div añadimos los datos del usuario y el objeto img
const divInfo_img = document.createElement("div");
divInfo_img.classList.add("divInfo-img");

//En divInfo añado los datos del usuario
const divInfo = document.createElement("div");
divInfo.classList.add("divInfo");
let info = 
`<p><strong>Nombre: </strong>${nuevoUsuario.name}</p> 
<p><strong>Edad: </strong>${nuevoUsuario.edadUsuario}</p> 
<p><strong>Username: </strong>${nuevoUsuario.username}</p> 
<p><strong>Teléfono: </strong>${nuevoUsuario.phone}</p> 
<p><strong>Email: </strong>${nuevoUsuario.email}</p>`;
divInfo.innerHTML= info;
divInfo_img.appendChild(divInfo);

//Ahora añadimos la imagen
const divImg = document.createElement("div");
divImg.classList.add("divImg");
const imagenUsuario = document.createElement("img");
imagenUsuario.src=nuevoUsuario.imgUsuario;
imagenUsuario.alt=`Imagen de ${nuevoUsuario.name}`;
divImg.appendChild(imagenUsuario);
divInfo_img.appendChild(divImg);

divCard.appendChild(divInfo_img);
liElement.appendChild(divCard);
listaUsuarios.appendChild(liElement);
    
});

}

obtenerUsuarios();


