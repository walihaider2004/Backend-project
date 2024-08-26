require('dotenv').config()
const express = require('express')

const app = express()  
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/wali', (req, res) => {
    res.send(' Wali!')
  })

  app.get ('/login' , (req,res)=>{
    res.send('<h1> please login at chai our code </h1>')
  })

  app.get('/youtube', (req, res) => {
    res.send('youtube.com')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})