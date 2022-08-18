document.getElementById('cart').addEventListener('click', function (e) {
    const div = document.getElementById('sidebar')
    div.style.display = div.style.display === 'block' ? 'none' : 'block'
})

let calculate = document.getElementById("calculation");
let count = document.getElementById("buttonCountNumber");
// let finallyCalculate = document.getElementById("finallyCalculation")
calculation = document.getElementById("calculation").innerHTML;
// finallyCalculation = document.getElementById("finallyCalculation").innerHTML;

document.getElementById("buttonCountPlus").onclick = function() {
    let countPlus = count.innerHTML;
    if(+countPlus <= 3){
        count.innerHTML++;
        let countPlus = count.innerHTML;
        calculate.innerHTML = calculations(countPlus) ;
        // finallyCalculate.innerHTML = finallyCalculations(countPlus);
    }
}

document.getElementById("buttonCountMinus").onclick = function() {
    let countMinus = count.innerHTML;
    if(+countMinus >= 2){
        count.innerHTML--;
        let countMinus = count.innerHTML;
        calculate.innerHTML = calculations(countMinus) ;
        // finallyCalculate.innerHTML = finallyCalculations(countMinus);
    }
}

calculations = (count) => {
    let getCalculation = (+count)*(+calculation)
    return getCalculation;
}

// finallyCalculations = (count) => {
//     let getCalculation = (+count)*(+calculation) + (+finallyCalculation)
//     return getCalculation;
// }




