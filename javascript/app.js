//let users = []
const db = window.localStorage
function agregarUsuario(nombre, apellido, edad, domicilio){
  contacto = {
    id: Math.floor((Math.random() * 99) + 1),
    nombre: nombre.value,
    apellido: apellido.value,
    edad: edad.value,
    domicilio: domicilio.value
  }
  //users.push(contacto)
  db.setItem(contacto.id, JSON.stringify(contacto))
  nombre.value = ""
  apellido.value = ""
  edad.value = ""
  domicilio.value = ""
}

function showArray(){
  //let lista = document.getElementById("lista")
  let usuariosRegistrados = Object.keys(db)
  
  // usuariosRegistrados.map(user => {
  //   let li = document.createElement("li")
  //   li.innerText = user
  //   lista.appendChild(li)
  // })
  const contenido = document.getElementById('contenido')
  for (const valor of usuariosRegistrados) {
    let contacto = JSON.parse(db.getItem(valor))
    contenido.innerHTML += `
    <tr>
        <td>${contacto.id}</td>
        <td>${contacto.nombre}</td>
        <td>${contacto.apellido}</td>
        <td>${contacto.edad}</td>
        <td>${contacto.domicilio}</td>
      </tr>
    ` 
  }
}