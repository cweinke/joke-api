const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const root = path.join(__dirname, 'public')


app.use(express.json())
app.use(express.static('public'))

const jokes = [
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "What do you call a pony with a cough?",
        punchline: "A little horse."
    },
    {
        id: 4,
        joke: "Why did the frog take the bus to work?",
        punchline: "Because his car got toad."
    },
    
]



app.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

app.get('/api/v1/random-joke', (request, response) => {
    const r = Math.floor(Math.random() * 4)
    response.send(jokes[r])
})



app.listen(port, () => console.log('Listening on port'))