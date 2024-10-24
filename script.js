const firstCurr = document.querySelector('#curr1')
const secondCurr = document.querySelector('#curr2')

const firstCurrInput = document.querySelector('#curr1-value')
const secondCurrInput = document.querySelector('#curr2-value')

const conversionResult = document.querySelector('small')

fetch(`https://v6.exchangerate-api.com/v6/bc3c8c7634add037c17c06b1/pair/${firstCurr.value}/${secondCurr.value}/${firstCurrInput.value}`).then(
  response => {
    let data = response.json()
    return data
  }
).then(
    data => {
        console.log(data)
        conversionResult.textContent = `${firstCurrInput.value} ${firstCurr.value} = ${(data.conversion_rate).toFixed(3)} ${secondCurr.value}`

        secondCurrInput.value = (data.conversion_result).toFixed(2)
    }
)