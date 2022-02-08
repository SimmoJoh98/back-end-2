const express = require('express')
const cors = require('cors')
const app = express()
const { getHomes, deleteHome, createHome, updateHome} = require('./controller')

app.use(express.json())
app.use(cors())


//--------ENDPOINTS-------------------------------------//
app.get(`/api/houses`, getHomes)
app.delete(`/api/houses/:id`, deleteHome)
app.post(`/api/houses`, createHome)
app.put(`/api/houses/:id`, updateHome)
//------------------------------------------------------//

app.listen(4004, () => console.log(`Server Listening At Port 4004`))