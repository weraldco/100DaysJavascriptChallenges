const start = false
const question = document.querySelector('.question')
const optionsSection = document.querySelector('.options')
const container = document.querySelector('.container')
const questionNumber = document.querySelector('.question-count')
const htmlData = ''
let questionCount = 0

const sampleQuestion = [
    {
        question:'What is the center of the solar system?',
        options: ['Earth','Sun','Jupiter','Moon'],
        answer: 'Sun',
        answered: ''
    },
    {
        question:'What is the color of the earth?',
        options: ['Blue','Red','Yellow','Purple'],
        answer: 'Blue',
        answered: ''
    },
    {
        question:'Where is the Great Red Spot located?',
        options: ['Pluto','Saturn','Mercury','Jupiter'],
        answer: 'Jupiter',
        answered: ''
    },
    {
        question:"What does the Saturn has that other planet don't have?",
        options: ['Rings','No moon','Great Red spot','Slow rotation'],
        answer: 'Ring',
        answered: ''
    },
    {
        question:"What is the name of our Galaxy",
        options: ['Milky way','Andromeda','Proxima A','Proxima B'],
        answer: 'Milky way',
        answered: ''
    },
    {
        question:"Who is the first person landed in the moon",
        options: ['Neil Armstrong','Jun Armstrong','Alexander the Great','Albert Eistein'],
        answer: 'Neil Armstrong',
        answered: ''
    },
    {
        question:"What is the name of the latest telescope?",
        options: ['Hubble space','Satellite','SpaceX','James Web Space'],
        answer: 'James Web Space',
        answered: ''
    },
    {
        question:"What it is, the point of no return in space",
        options: ['Proxima B','Adromeda','Blackhole','Big Bang'],
        answer: 'Blackhole',
        answered: ''
    },
    {
        question:"Whos is the owner of SpaceX",
        options: ['Elon Musk','Mark Zuckerburg','Jeff Bezos','James Reid'],
        answer: 'Elon Musk',
        answered: ''
    },
    {
        question:"Elon musk trying to go to what Planet",
        options: ['Mars','Saturn','Mercury','Jupiter'],
        answer: 'Mars',
        answered: ''
    },
    {
        question:"What cause the dinosaur is not here anymore?",
        options: ['Massive Flood','Giant Volcano Eruption','Big Asteroid','Super Typhoon'],
        answer: 'Big Asteroid',
        answered: ''
    },
]

const nextBtn = document.getElementById('nextBtn')

getNewQuestion()

nextBtn.addEventListener('click',()=>{
    getNewQuestion()
})


function getNewQuestion() {
    setTimeout(()=>{
        if(questionCount !== 10) {
            question.innerHTML = ''
            optionsSection.innerHTML = ''

            const result = sampleQuestion.filter(item => {
                return item.answered === ''
            })

            //Get random index
            let i = Math.floor(Math.random() * result.length)

            // Get the question
            const questionSpan = document.createElement('span')
            questionSpan.textContent = result[i].question

            // Get all the answer options.
            result[i].options.forEach(option => {
                const button = document.createElement('button')
                button.dataset.option = ''
                button.textContent = option
                optionsSection.append(button)
            })
            question.append(questionSpan)
            
            getOptions(result[i].question)
            questionCount++
            questionNumber.textContent = `Question ${questionCount} of 10`


        } else {
            container.innerHTML = ''
            
            const answered = sampleQuestion.filter(item => {
                return item.answered === item.answer})
            
            const html = `<div class="end-message"><h2>THANK YOU!</h2> your quiz is done!</div>
            <span class='score-label'>Score:</span>  <span class='score'>${answered.length}</span>`
            // const html = `<div class="end-message"><h2>THANK YOU!</h2> your quiz is done!</div>
            // <button class='view-result'>View your result</button>`
            
            container.innerHTML = html
            console.log(sampleQuestion)
            console.log(answered)
        }
    }, 500)
    
    

}

function getOptions(question) {
    
    let lastTile = -1
    const allOptions = document.querySelectorAll('[data-option]')
    allOptions.forEach((option, index) => {
        option.addEventListener('click',()=>{
            
            if(allOptions[lastTile] !== undefined) delete allOptions[lastTile].dataset.selected

            option.dataset.selected = ''  
            
            const currentQuestion = sampleQuestion.filter(item => {
                return item.question == question
            })
            currentQuestion[0].answered = option.textContent

            lastTile = index
            
        })
     })
     
}


