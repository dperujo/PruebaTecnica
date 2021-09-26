
function filtro() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("busqueda");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabla");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


$.ajax({
    type: 'GET',
    url: 'https://www.omdbapi.com/?apikey=731e41f&t=Harry+Potter&type=movie',
    dataType: 'json',
    success: function(data) {
        var peliculas = []
        var pelicula = {
            titulo: data.Title,
            IBMId: data.imdbID,
            Ano: data.Year
        }
        peliculas.push(pelicula)
        if(!peliculas.findIndex(x => x.titulo=="data.title")){
            peliculas.push(pelicula)
        }
        var titulo = document.getElementById('titulo');
        var Id = document.getElementById('ID');
        var Ano = document.getElementById('Ano');
        
        peliculas.forEach(pelicula => {
            titulo.innerText  = pelicula.titulo
            Id.innerText  = pelicula.IBMId
            Ano.innerText  = pelicula.Ano
        });
        console.log(peliculas)
        
    }
  });

  