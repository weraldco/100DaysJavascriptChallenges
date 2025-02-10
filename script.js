const links = [
	'DAY1 - Counter App',
	'DAY2 - Random Number',
	'DAY3 - Palindrome Checker',
	'DAY4 - Random Hex Color Generator',
	'DAY5 - Modal',
	'DAY6 - Vowel Counter App',
	'DAY7 - Click to copy',
	'DAY8 - Input Field Character Counter',
	'DAY9 - Internet Connection Detector',
	'DAY10 - QUIZ APP',
	'DAY11 - API Project (Pokemon)',
	'DAY12 - Random Quote',
	'DAY13 - Weather App',
];

const linkList = document.querySelector('.linkList');

links.map((link) => {
	const list = document.createElement('li');
	const anchor = document.createElement('a');
	anchor.href = link;
	anchor.textContent = link;
	list.append(anchor);
	linkList.append(list);
});

console.log(linkList);
