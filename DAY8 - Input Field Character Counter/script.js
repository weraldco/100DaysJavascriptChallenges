const inputText = document.getElementById('inputText')
const charCount = document.getElementById('charCount')
inputText.addEventListener('input', (e) => {
    const value = inputText.value
    charCount.textContent =`Character Count: ${value.length} character`
})