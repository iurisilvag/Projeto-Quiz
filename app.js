const correctAnswers = ['C','C','B','C']

const form = document.querySelector('[data-js="data-form"]')
const showResult = document.querySelector('[data-js="result"]')

form.addEventListener('submit',event=>{
    event.preventDefault()
    
    const userAnswers = [
        event.target.inputQuestion1.value,
        event.target.inputQuestion2.value,
        event.target.inputQuestion3.value,
        event.target.inputQuestion4.value
    ]

    let score = 0

    correctAnswers.forEach( (item, index) =>{
        if(item === userAnswers[index]){
            score +=25
        }
    })

    scrollTo(0,0)
    showResult.classList.remove('d-none')
    let counter = 0

    const time = setInterval(()=>{
        if(counter < score){
            counter++


            showResult.querySelector('span').textContent = `${counter}`
        }else{
            clearInterval(time)
        }
    },100)
    



})
