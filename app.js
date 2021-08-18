function updateNumber(type, add, number) {
    const input = document.getElementById(`${type}-input`)
    let inputNumber = parseInt(input.value)
    if (add) {
        inputNumber = inputNumber + 1
    } else if (inputNumber > 0) {
        inputNumber = inputNumber - 1
    }
    input.value = inputNumber
        // amount 
    const amount = document.getElementById(`${type}-amount`)
    amount.innerText = inputNumber * number

    // sub-total-amount 
    const subtotalAmount = document.getElementById('subtotal-amount')
    subtotalAmount.innerText = inputNumber * number

    // total price update 
    calculatePrice()
}

function getInput(product) {
    const productInput = document.getElementById(product + '-input')
    const productNumber = parseInt(productInput.value)
    return productNumber
}

function calculatePrice() {

    const phonePrice = getInput('phone') * 1219;
    const casePrice = getInput('case') * 59;
    // subtotal 
    const subtotal = phonePrice + casePrice;
    document.getElementById('subtotal-amount').innerText = subtotal
        // tax 
    const tax = subtotal / 10;
    document.getElementById('tax-amount').innerText = tax
        // total 
    const total = subtotal + tax
    document.getElementById('total-amount').innerText = total



}

// case-input plus 
document.getElementById('case-plus').addEventListener('click', function() {
        updateNumber('case', true, 59)
    })
    // case-input minus
document.getElementById('case-minus').addEventListener('click', function() {
    updateNumber('case', false, 59)

})

// phone-input plus 
document.getElementById('phone-plus').addEventListener('click', function() {
        updateNumber('phone', true, 1219)
    })
    // phone-input minus
document.getElementById('phone-minus').addEventListener('click', function() {
    updateNumber('phone', false, 1219)
})