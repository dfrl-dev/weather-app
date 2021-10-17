const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')





weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    const units = document.querySelector('input[name="units"]:checked').value
    messageOne.textContent = 'Searching...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location + units).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            messageOne.textContent = data.error
        } else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })    
})
})