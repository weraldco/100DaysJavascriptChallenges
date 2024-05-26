const incrementBtn = document.getElementById('incrementBtn')
const decrementBtn = document.getElementById('decrementBtn')
const countResult = document.getElementById('countResult')
let counter = 0

incrementBtn.addEventListener('click', ()=>{
    incrementCounter()
})
decrementBtn.addEventListener('click', ()=>{
    decrementCounter()
})

function incrementCounter() {
    counter++
    countResult.textContent = counter
}

function decrementCounter() {
    counter--
    countResult.textContent = counter
}