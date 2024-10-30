const textoHeader = document.querySelector('#heading')

console.log(textoHeader)

textoHeader.textContent = "Café leila"

textoHeader.classList.add('nueva-clasejs')

const enlace = document.querySelectorAll('.navegacion a')



const btnForm = document.querySelector('.formulario input[type=submit]')
console.log(btnForm)


function imprimirClick(e) {
  e.preventDefault()
  console.log("Hiciste Click");
}

btnForm.addEventListener('click', imprimirClick);

const contacto=document.querySelector('h3')
console.log(contacto)

contacto.addEventListener('click', cambiarClase)

function cambiarClase(){
    contacto.classList.add("")
}