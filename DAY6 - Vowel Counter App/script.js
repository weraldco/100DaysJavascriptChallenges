// const string = 'The world is revolving around the sun aaaa'
const inputText = document.getElementById('inputText')
const countVowelBtn = document.getElementById('countVowelBtn')
const paragraph = document.querySelector('.paragraph')
const vowelCount = document.getElementById('vowelCount')

countVowelBtn.addEventListener('click', ()=>{

    let vowel = []

    inputText.value.split('').forEach(char => {
        if(char.match(/^[aeiou]+$/)) {
            vowel.push(`<span class='vowel'>${char}</span>`)
            
        } else {
            vowel.push(`<span>${char}</span>`)
        }
    }) 

    paragraph.innerHTML = vowel.join('')
    const getVowels = document.querySelectorAll('.vowel')
    vowelCount.textContent =` Vowel count: ${getVowels.length}`
})
