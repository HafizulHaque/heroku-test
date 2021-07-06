const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res)=>{
  return res.send('Hello from your home page')
})

app.get('/about', (req, res)=>{
  return res.send('hello from your about page')
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log('app running successfully')
})