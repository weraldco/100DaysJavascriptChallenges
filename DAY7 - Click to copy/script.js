const givenTxt = document.getElementById('givenTxt')
const result = document.getElementById('result')
const copyTextBtn = document.getElementById('copyTextBtn')

givenTxt.addEventListener('click', ()=>{
    selectedText()
})

copyTextBtn.addEventListener('click',()=>{
    selectedText()
})
function selectedText(){
    let txt = ''
    if(window.getSelection) {
        txt = window.getSelection().toString()
    } else if (document.selection) {
        txt = document.selection.createRange().text
    }
    navigator.clipboard.writeText(txt)
}