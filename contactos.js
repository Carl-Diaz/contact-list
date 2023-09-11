let listaContacto = [
  "Carlos Diaz",
  "Jhon Pitre",
  "Juan Garcia",
  "Pedro Paramo",
];

function agregarContacto(nuevoContacto) {
  listaContacto.push(nuevoContacto);
}

agregarContacto("Maria Perez");

function borrarContacto(borrar) {
  listaContacto.splice(borrar, 1);
}

function imprimirContacto() {
  for (let i = 0; i < listaContacto.length; i++) {
    console.log(listaContacto[i]);
  }
}
