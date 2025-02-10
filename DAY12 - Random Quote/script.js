const API_QUOTE_URL = 'https://api.quotable.io/quotes/random';

const quoteDisplay = document.getElementById('quoteDisplay');
const quoteAuthor = document.getElementById('quoteAuthor');

function fetchQuoteData(url) {
	return fetch(url)
		.then((res) => res.json())
		.then((data) => data);
}

async function getQuoteData() {
	const quote = await fetchQuoteData(API_QUOTE_URL);

	quoteDisplay.innerHTML = `<i class="fa-solid fa-quote-left"></i>  ${quote[0].content}<i class="fa-solid fa-quote-right"></i>`;
	quoteAuthor.innerHTML = `<i class="fa-solid fa-minus"></i> ${quote[0].author}`;
}

getQuoteData();
