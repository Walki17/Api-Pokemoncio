document.getElementById('boton').addEventListener('click', function(){ 

    const campoBuscar = document.getElementById('buscar').value.toLowerCase(); 
    const DATOS = `https://pokeapi.co/api/v2/pokemon/${campoBuscar}`; 

    fetch(DATOS)
        .then(response => response.json())
        .then(data => {
            const parrafo = document.getElementById('test'); 
            parrafo.innerHTML = `Nombre: ${data.name}`; 

        })

    .catch(error => {
        console.error('Error:', error);
    });

})


/*const DATOSDOS = "https://pokeapi.co/api/v2/pokemon/pikachu" 


document.getElementById('buscar').addEventListener('keydown', function (event) {

 // if (event.key === 'Enter'){
    
// }

if (event.key === 'Escape') {
            buscar.value ="";
}
})*/






