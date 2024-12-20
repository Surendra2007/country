let api="https://restcountries.com/v3.1/all";
let main=document.querySelector("main");
let input=document.querySelector("input");
console.log(input);



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
        })
    //   // Function to show data

  function showData(data) {
    main.innerHTML = "";
    data.forEach((element) => {
      let div=document.createElement("div");
        div.classList.add("box")
        
        div.innerHTML = `
          <img src=${element.flags.svg} alt="">
              <div class="box-text">
                <h2>${element.name.common}</h2>
            <p><span class="bold">Population</span> : ${element.population}</p>
            <p><span class="bold">Region</span> : ${element.region}</p>
            <p><span class="bold">Capital</span> : ${element.capital[0]}</p>
          </div>
        `
      main.appendChild(div);
    });
  }

let header=document.getElementById("head")
let mode=document.getElementById("mode");
let body=document.body;
mode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelectorAll(".box").forEach((box) => {
        box.classList.toggle("dark-mode");
    });
});



