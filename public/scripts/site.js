(async () => {
    const getJoke = async () => {

        const h2 = document.querySelector('h2')
        const h3 = document.querySelector('h3')
    
        //const { pathname } = window.location
    
        const url = '/api/v1/random-joke'
    
        const result = await fetch(url)
        const { joke, punchline } = await result.json()
        
        h2.textContent = joke
        h3.textContent = punchline

    }
    const btn = document.querySelector('#joke');
    btn.addEventListener("click", (getJoke)) 
})()