const  cards = document.getElementById("cards");


fetch(
    "https://restcountries.com/v3.1/all"
).then((res)=> res.json())
.then((data) => {
    console.log(data)
    let innerHTML = "";
    for(let i = 0; i< data.length; i++){
        innerHTML += `<div class="row row-cols-1 row-cols-md-3 g-4 " id="cards" >
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="${data[i].flags.png }" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title" id="official">${data[i].altSpellings[2]}</h5>
              <p > Populations : ${data[i].population}</p>
              <p> Region : ${data[i].region}
              <p> Capital : ${data[i].capital}</p>
            </div>
          </div>
        </div>
      </div>`
    }
    cards.innerHTML = innerHTML;
    
})