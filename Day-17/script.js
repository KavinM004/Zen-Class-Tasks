const loadCountryAPI = () =>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => displayCountries(data))
}
const displayCountries = countries =>{
  const countriesHTML = countries.map(country => getCountry(country));
  const container = document.getElementById('countries');
  container.innerHTML = countriesHTML.join(' ');
}
const getCountry = (country) =>{
  console.log(country)
  return `
      <div class="country-div">
      <h2 style="text-align:center;font-style:italic;
      background: #000;
      color: white;
      text-align: center;
      padding: 15px;border:1px solid white">${country.name.common}</h2>
      <img src="${country.flags.png}">
      <hr>
      <h4 style="text-align:center;font-style:">Population : ${country.population}</h4>
      <h4 style="text-align:center;font-style:">Regoin : ${country.region}</h4>
      <h4 style="text-align:center;font-style:">Country Code : ${country.cca2}</h4>
      <button class="btn">Weather</button>
       </div>
  `
}
loadCountryAPI()

let apiurl='https://api.openweathermap.org/data/2.5/weather?q=peru&appid=893ce93d19df342cf40bbf0822359f8d';
fetch(apiurl).then((response)=>{
    if(response.status===200){
        return response.json();
    }
})
.then((val)=>{
    let kavin=document.getElementById("btn");
    kavin.onclick=function(){
        kavin.innerHTML=val.main.temp;
    }
})
.catch((err)=>{
    console.log("Error",err);
})