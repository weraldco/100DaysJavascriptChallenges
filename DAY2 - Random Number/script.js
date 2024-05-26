const countResult = document.getElementById('countResult')
let counter = 0

countResult.addEventListener('mouseover',()=>{
    counter = Math.floor(Math.random()*31)
    countResult.textContent = counter
})