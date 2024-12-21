let api="https://restcountries.com/v3.1/all";
let allBox=document.querySelector(".allbox");
let input=document.querySelector("input");
let select=document.querySelector("select");

fetch(api)
.then((response) => {
  return response.json();
})
.then((json) => {
    showData(json);
    input.addEventListener("input", (event) => {
            let filteredArray = json.filter((element)=> element.name.common.toLowerCase().includes(input.value))
            showData(filteredArray);
      
          });
          select.addEventListener("change",()=>{
              let filtereddata = json.filter((element)=> element.region === select.value)
              showData(filtereddata)
              });
        })
// Function to show data

  function showData(data) {
    allBox.innerHTML = "";
    data.forEach((element) => {
      let div=document.createElement("div");
        div.classList.add("box")
        
        div.innerHTML = `
          <img src=${element.flags.svg} alt="">
              <div class="box-text">
                <h2>${element.name.common}</h2>
            <p><span class="bold">Population</span> : ${element.population}</p>
            <p><span class="bold">Region</span> : ${element.region}</p>
            <p><span class="bold">Capital</span> : ${element.capital}</p>
          </div>
        `;
        div.addEventListener("click", () => {
          showDetails(element);
        });
      allBox.appendChild(div);
    });
  }
  let main = document.querySelector("main")
  function showDetails(country) {
    document.querySelector(".search").style.display="none";
    main.innerHTML = `
      <button class="back-btn">Back</button>
      <div class="box-new">
        <div class="img-box"><img src=${country.flags.svg} alt="Flag of ${country.name.common}"></div>
        <div class="box-text" id="boxtext">
          <h2>${country.name.common}</h2>
          <p><span class="bold">Native Name</span>: ${country.name.official}</p>
          <p><span class="bold">Population</span>: ${country.population}</p>
          <p><span class="bold">Region</span>: ${country.region}</p>
          <p><span class="bold">Sub Region</span>: ${country.subregion}</p>
          <p><span class="bold">Capital</span>: ${country.capital}</p>
          <p><span class="bold">Languages</span>: ${Object.values(country.languages || {}).join(
            ", "
          )}</p>
          <p><span class="bold">Currencies</span>: ${Object.values(
            country.currencies || {}
          )
            .map((currency) => currency.name)
            .join(", ")}</p>
          <p><span class="bold">Top Level DoallBox</span>: ${country.tld.join(", ")}</p>
        </div>
      </div>
    `;

    let button = document.querySelector("button");
    button.addEventListener("click",()=>{
      window.location.href = "./index.html"
    })
  }

let mode=document.getElementById("mode");
mode.addEventListener("click", () => {
    console.log("hi");
    
    document.body.classList.toggle("dark-mode");
    input.classList.toggle("dark-mode");
    select.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelectorAll(".box").forEach((box) => {
        box.classList.toggle("dark-mode");
    });
    if(document.body.getAttribute("class")==="dark-mode"){
      mode.innerHTML=`
      <i class="fa-regular fa-sun"></i> Light Mode`
    }else{
      mode.innerHTML=`
      <i class="fa-regular fa-moon"></i> Dark Mode`
    }
});



