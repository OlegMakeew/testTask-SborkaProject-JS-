function checkValue() {
    const cardName = document.getElementById('cardName');
    const number = document.getElementById('number');
    const date = document.getElementById('date');
    const CVV = document.getElementById('CVV');
    let button = document.getElementById('MyButton');
    
    if (cardName.value === '' || number.value === '' || date.value === '' || CVV.value === '')
        button.disabled = true
    if (cardName.value != '' && number.value != '' && date.value != '' && CVV.value != '')
    button.disabled = false
}
window.onload = checkValue()