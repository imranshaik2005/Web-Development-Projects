const addBTN = document.getElementById("addButton");
const resultDiv = document.getElementById("result");
addBTN.addEventListener("click", ()=>{
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result = num1 + num2;
    resultDiv.innerHTML = result;
})
