const getRandomHex = document.getElementById('getRandomHex')
const displayRandomHex = document.getElementById('displayRandomHex')

getRandomHex.addEventListener('click',()=>{
    const hexaChart = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C','D', 'E', 'F']
    let hexValue = '#'
    displayRandomHex.innerHTML = ''
    
    for(let i = 0; i< 6; i++) {
        const num  = Math.floor(Math.random() * hexaChart.length)
        hexValue += hexaChart[num]
    }

    const div = document.createElement('div')
    div.style.backgroundColor = hexValue

    const span = document.createElement('span')
    span.textContent = hexValue
    div.append(span)
    displayRandomHex.append(div)
    
})