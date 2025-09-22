const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
  const nombre = inputAmigo.value.trim(); // elimina los espacios en blanco
  if (nombre === "") {
    alert("⚠️ Debes ingresar un nombre válido.");
    return;
  }
  listaAmigos.push(nombre);
  //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;
  ulListaAmigos.innerHTML += `<li>${nombre}</li>`;
  inputAmigo.value = ""; // limpiar el input depués de agregar
}
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("⚠️ No hay amigos registrados para sortear.");
    return;
  }
  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[random];
  ulResultado.innerHTML = `<li>🎉El amigo secreto es: ${amigoSecreto}</li>`;
}
