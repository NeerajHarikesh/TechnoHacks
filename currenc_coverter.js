const ConvertNow=()=>{
    const currencyOne=document.getElementById('currency-one').value;
    const currencyTwo=document.getElementById('currency-two').value;
    const amount=parseInt(document.getElementById('amount').value);

    var myHeaders = new Headers();
myHeaders.append("apikey", "TYxW8HrzEgBRYTVNfxkGWALBmjeH66BS");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/convert?to="+ currencyTwo +"&from=" +currencyOne+ "&amount="+amount+"" , requestOptions)
  .then(response => response.json())
  .then(json => {
   let quotation=json.result;
   document.getElementById("resultDisplay").innerHTML= amount+" "+currencyOne+" "+ "="+quotation+" "+currencyTwo;
  })
 
  .catch(error => console.log('error', error));
}

