
const inputText = document.getElementById('inputText')
const checkBtn = document.getElementById('checkBtn')
const container = document.querySelector('.container')
const displayResult = document.getElementById('displayResult')
const span = document.querySelector('span')
checkBtn.addEventListener('click',()=>{

    displayResult.innerHTML = ''
    span.textContent = ''
    const string = inputText.value

    if(string === '') {
        span.textContent = `User didn't input any string`
        return}

    const div = document.createElement('div')

    if(checkPalindrome(string) === true) {
        
        console.log(checkPalindrome(string))
        div.classList.remove('wrong')
        div.textContent = `${string} is a palidrome`

    } else {
        div.classList.add('wrong')
        console.log(checkPalindrome(string))
        div.textContent = `${string} is not a palidrome`
    }

    displayResult.append(div)
})

function checkPalindrome(str) {
    const strArr = str.split('')
    const resultStr = []
    for( let i = strArr.length - 1; i > -1;i--) {

        resultStr.push(strArr[i])
    }

    if(resultStr.join('') == str)  return true
}