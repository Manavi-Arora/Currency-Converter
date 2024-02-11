let currCode;
let countryCode;
const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let currfrom = document.querySelector(".from select");
let currto = document.querySelector(".to select");

for (const key in CountryCurrencyCodes) {
    const element = CountryCurrencyCodes[key];
    let newOption = document.createElement("option");
    newOption.innerText = key;
    newOption.value = key;
    
    document.querySelector("#fromCountry").append(newOption);
    if (key === "USD" && element === "US") {
        newOption.selected = true;
    }
}


fromCountry.addEventListener("click", (evt) => {
    updateFlag(evt.target);
})


for (const key in CountryCurrencyCodes) {
    const element = CountryCurrencyCodes[key];
    let newOption = document.createElement("option");
    newOption.innerText = key;
    newOption.value = key;
    if (key === "INR") {
        newOption.selected = "selected";
    }
    document.querySelector("#toCountry").append(newOption);
}

toCountry.addEventListener("click", (evt) => {
    updateFlag(evt.target);
})

function updateFlag(element) {
    currCode = element.value;
    console.log(currCode);
    countryCode = CountryCurrencyCodes[currCode];
    console.log(countryCode);

  element.parentElement.querySelector("img").src = `https://flagsapi.com/${countryCode}/flat/64.png`;

}
btn.addEventListener("click", async ()=>{

console.log(currfrom.value,currto.value)
let URL = `${BASE_URL}/${currfrom.value.toLowerCase()}/${currto.value.toLowerCase()}.json`
let promise = await fetch(URL);
let response = await promise.json();
let exchangeRate = response[currto.value.toLowerCase()];
console.log(response);
console.log(exchangeRate);

let amount = document.querySelector(".amount input").value
console.log(amount);

if(amount === '')
{
    amount = 1;
}

let finalAmount = amount * exchangeRate;
document.querySelector(".text").innerText = `${amount} ${currfrom.value} = ${finalAmount} ${currto.value}`;

})