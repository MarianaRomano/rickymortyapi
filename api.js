const ul = document.getElementById("contenedor-tarjetas")

fetch("https://rickandmortyapi.com/api/character") 
.then(res => res.json()) 
.then(data => {
  const dataAPI = data.results;
  
  let acumulator = "";
  
  for(let i = 0; i < dataAPI.length; i++){
    acumulator = acumulator + `
   
      <div class="card">
        <div class="card_image">
          <img src=${dataAPI[i].image} alt=${dataAPI[i].name}>
        </div>
        <div class="card_content">
          <h2 class="card_title">${dataAPI[i].name}</h2>
          <p class="card_text"><strong>Status</strong>: ${dataAPI[i].status}</p>
          <p class="card_text"><strong>Specie</strong>: ${dataAPI[i].species}</p>
          <p class="card_text"><strong>Gender</strong>: ${dataAPI[i].gender}</p>
          <p class="card_text"><strong>Location</strong>:</p>
          <p class="card_text">${dataAPI[i].location.name}</p>
        </div>
      </div>
    
    `        
  }

  ul.innerHTML = acumulator
}) 