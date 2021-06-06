const currencyEl_One = document.getElementById('currency-one');
const amountEl_One = document.getElementById('amount-one');
const currencyEl_Two = document.getElementById('currency-two');
const amountEl_Two = document.getElementById('amount-two');
const API_key = 'c8da8b02a1a631b83a5c85e6';


const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate(){
  const currency_one = currencyEl_One.value;
  console.log(currency_one);
  const currency_two = currencyEl_Two.value;
  console.log(currency_two);
 
  fetch(`https://v6.exchangerate-api.com/v6/${API_key}/latest/${currency_one}`)
  .then(response => response.json())
  .then(data => {
    const rate = data.conversion_rates[currency_two];
    console.log(rate)
    rateEl.innerText = `1 ${currency_one} = ${rate}${currency_two}`;
    amountEl_Two.value = (amountEl_One.value * rate).toFixed(2);
  });

}

//Event Listner
currencyEl_One.addEventListener('change',calculate);
amountEl_One.addEventListener('input',calculate);
currencyEl_Two.addEventListener('change',calculate);
amountEl_Two.addEventListener('input',calculate);

swap.addEventListener('click', () =>{
  const temp = currencyEl_One.value;
  currencyEl_One.value = currencyEl_Two.value;
  currencyEl_Two.value = temp;

  calculate();
})

calculate()