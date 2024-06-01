const API_QUOTE_URL = 'https://api.quotable.io/random'

const quoteDisplay = document.getElementById('quoteDisplay')
const quoteAuthor = document.getElementById('quoteAuthor')

function fetchQuoteData(url){
    return fetch(url)
    .then(res => res.json())
    .then(data => data)
}

async function getQuoteData(){
    const quote = await fetchQuoteData(API_QUOTE_URL)
    console.log(quote)

    quoteDisplay.innerHTML = `<i class="fa-solid fa-quote-left"></i>  ${quote.content}<i class="fa-solid fa-quote-right"></i>`
    quoteAuthor.innerHTML = `<i class="fa-solid fa-minus"></i> ${quote.author}`
}

getQuoteData()