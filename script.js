function mayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function buscarPokemon() {
    const campoBuscar = document.getElementById('buscar').value.toLowerCase(); 
    const DATOS = `https://pokeapi.co/api/v2/pokemon/${campoBuscar}`; 

    fetch(DATOS)
    .then(response => response.json())
    .then(data => {
        let habilidades = ""; 

        data.abilities.forEach(ability => {
            habilidades += `<p> <img src="icono.png" id="icono" alt="Icono" style="width: 8%; height: 100%;"> ${mayuscula(ability.ability.name)}</p>`;
        });

        const div = document.getElementById('test');
        const imagenDelantera = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${data.id}.gif`;

        div.innerHTML = ` 
    <div class="d-flex justify-content-center align-items-center" style="height: 70vh;">
        <div class="card" style="width: 18rem;">
            <img src="${imagenDelantera}" class="card-img-top" alt="${mayuscula(data.name)}" style="width: 100%; height: 200px; object-fit: contain;">
            <div class="card-body">
                <h5 class="card-title" style="font-family: 'Roboto', sans-serif; text-align: center;">${mayuscula(data.name)}</h5>
                <p class="card-text" style="text-align: center;"> <i>N° ${data.id}</i></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" style="text-align: center;"> Tipo: ${mayuscula(data.types[0].type.name)}</li>
            </ul>
            <p class="list-group-item" style="text-align: center;"> Habilidades: <span>${habilidades}</span></p>
        </div>
    </div>`;
    })
    .catch(error => {
        console.error('Error:', error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Pokemon no encontrado';
        errorMessage.classList.add('error-message');
        document.body.appendChild(errorMessage);
    
        setTimeout(() => {
            errorMessage.remove();
        }, 5000);
    });
}

document.getElementById('boton').addEventListener('click', buscarPokemon);

document.getElementById('buscar').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        buscarPokemon();
    }
    if (event.key === 'Escape') {
        document.getElementById('buscar').value = "";
        window.location.reload();
    }
});