let contador = document.querySelector('#contador')
contador.textContent = 1
let c = 1

const timer = setInterval(() => {
  c ++
  contador.textContent ++

  if (c > 99) {
    c = 1
    contador.textContent = 1
  }
}, 100)



