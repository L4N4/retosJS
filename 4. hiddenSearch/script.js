const searchBar = document.getElementById('search')
const boton = document.getElementById('btn')


boton.addEventListener('click', () => {
    searchBar.classList.toggle('active')
})
