const api_host = `http://restcountries.eu/rest/v2/name/eesti`;
const flag_id = document.querySelector("$flag_svg")
const contry_name = document.querySelector("#country_name")
const capital_name = document.querySelector("#country_capital")
window.addEventListener('load',() => {
    fetch(api_host).then(response => {
        return response.json();
    }).then(data => {
        console.log(data[0]);
        flag_id.src = data[0] ;
        contry_name.src=data[0];
    })
})