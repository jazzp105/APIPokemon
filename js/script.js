//URL de la API
const API = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=00";

// Obtener resultado de API
const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json), paginacion(json);
    })
    .catch((error) => {
      console.log("Error :", error);
    });
};

const llenarDatos = (data) => {
  let html = "";
  data.results.forEach((pokemon) => {
    html += '<div class="col mt-5">';
    html += '<div class="card" style="width: 10rem;">'; 
    html += '<div class="card-body">';
    html += `<h5 class = "card-title" >${pokemon.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPokemons").innerHTML = html;
};


const paginacion = (info) => {
    let html = "";
    html += `<li class="page-item ${info.previous ? "" : "disabled"}"><a class="page-link" onclick="getData('${
      info.previous
    }')">Previous</a></li>`;
    html += `<li class="page-item ${
      info.next ? "" : "disabled"
    }"><a class="page-link" onclick="getData('${info.next}')">Next</a></li>`;
    document.getElementById("paginacion").innerHTML = html;
  };
  
  //EjecutargetData
  getData(API);