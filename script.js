const firstCurr = document.querySelector('#curr1')
const secondCurr = document.querySelector('#curr2')

const firstCurrInput = document.querySelector('#curr1-value')
const secondCurrInput = document.querySelector('#curr2-value')

const swapButton = document.querySelector('button')
const conversionResult = document.querySelector('small')

fetchAPI()

function fetchAPI() {
    fetch(`https://v6.exchangerate-api.com/v6/bc3c8c7634add037c17c06b1/pair/${firstCurr.value}/${secondCurr.value}/${firstCurrInput.value}`).then(
        response => {
          let data = response.json()
          return data
        }
      ).then(
          data => {
              console.log(data)
              conversionResult.textContent = `1 ${firstCurr.value} = ${(data.conversion_rate).toFixed(3)} ${secondCurr.value}`
      
              secondCurrInput.value = (data.conversion_result).toFixed(2)
      
          }
      )
}

swapButton.addEventListener('click', e => {

    // let firstCurrCopy = firstCurr.value
    // firstCurr.value = secondCurr.value
    // secondCurr.value = firstCurrCopy

    [firstCurr.value, secondCurr.value] = [secondCurr.value, firstCurr.value]

    fetchAPI()
})

firstCurr.addEventListener('change', e => {
    fetchAPI()
})

secondCurr.addEventListener('change', e => {
    fetchAPI()
})

firstCurrInput.addEventListener('input', e => {
    fetchAPI()
})