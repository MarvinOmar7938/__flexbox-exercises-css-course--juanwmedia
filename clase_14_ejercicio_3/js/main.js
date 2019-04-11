// funcion auto-invocada
;(function () {
  let movil = document.getElementById('movil')
  let menu = document.getElementById('principal')
  //   console.log(movil)
  //   console.log(menu)
  movil.addEventListener('click', function () {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'
  })
})()
