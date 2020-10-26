var currency1,currency2,getValue,putValue;

//get input
function getCurrency(){
    currency1 = document.querySelector('.currency__1').value;
    currency2 = document.querySelector('.currency__2').value;
    getValue = document.querySelector('.input__value').value;
       
    getApi();

}




function changeValue(){

    var temp = currency1;
    currency1 = document.querySelector('.currency__1').value = currency2;
    currency2 = document.querySelector('.currency__2').value = temp;
    getCurrency();

}



getCurrency();

document.querySelector('.swap').addEventListener("click",function(){
    changeValue();
    
});

document.addEventListener("change",function(){
    getCurrency();
    
});
document.addEventListener("input",function(){
    getCurrency();
    
});



//api setup

function getApi()
{

const http = new XMLHttpRequest();
const url = 'https://api.exchangeratesapi.io/latest?base='+currency1;
http.open("GET",url);
http.send();

http.onreadystatechange = function(){

    if(this.readyState===4 && this.status==200)
    {
        var responseData,currValue1,currValue2,totalOutput,data;
        responseData = this.responseText;
        // console.log(responseData);
        data = JSON.parse(responseData);

        console.log(currency1,currency2,getValue);

        currValue1 = data.rates[currency1];
        currValue2 = data.rates[currency2];    

        document.querySelector('.value__con').innerHTML = '1 '+ currency1 +' = ' + currValue2.toFixed(4) + ' '+ currency2;
        totalOutput = getValue*currValue2;
        document.querySelector('.put__value').value =totalOutput.toFixed(2) ;
        
        
    }
       
}
}