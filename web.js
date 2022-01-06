const express = require('express')
const app = express()
const PORT = 8001

app.set('views', './src/views');
app.set('view engine', 'ejs')

//router
app.get('/', (req, res) => {
  res.render('index')
})

//src setting
app.use(express.static(`${__dirname}/src/public`));


app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})


module.exports = app;