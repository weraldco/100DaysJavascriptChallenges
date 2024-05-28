const connection = window.navigator.onLine
const offline = document.querySelector('.offline')
const online = document.querySelector('.online')

console.log(connection)
if(connection) {
    offline.classList.add('turnoff')
} else {
    online.classList.add('turnoff')
}