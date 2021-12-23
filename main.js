
const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const generateDate = () => {
    const dateElement = document.getElementById('date')
    const date = randomDate(new Date(1700,0,1), new Date(2399,0,1))
    dateElement.textContent = date.toLocaleString('default', {day: 'numeric', month: 'long', year: 'numeric'})
    return date
}



const checkGuess = (button, date) => {
    const guess = parseInt(button.dataset.day)
    const day = date.getDay()
    const results = document.querySelector('.results')
    const result = document.createElement('p')
    result.textContent = 
        date.toLocaleString('en-US', {day: 'numeric', month: 'long', year: 'numeric'}) +
        ' is ' + 
        date.toLocaleString('en-US', {weekday: 'long'}) +
        '. You guessed ' +
        button.textContent
    if(guess === day) {
        result.style.color = 'green'
    } else {
        result.style.color = 'red'
    }
    results.prepend(result)
}

(async () => {
    let currentDate = generateDate()
    const buttons = document.querySelector('.buttons')
    for (let button of buttons.children) {
        button.addEventListener('click', () => {
            checkGuess(button, currentDate)
            currentDate = generateDate()
        })
    }
})()
