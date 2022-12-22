const express = require('express');
const path = require('path');
const mssqlConfig = require('./index.js');
const configViewEngine = require('./configs/viewEngine');

const app = express()
const port = 3000;
const ViewEngine = configViewEngine.configViewEngine(app);
app.use(express.static(path.join(__dirname, "/public/")));

app.get('/', async (req, res) => {
    const Query1 = await mssqlConfig.queryExample1() //require('./index').queryExample1
    res.render('Home.ejs')
    //res.json(Query1.recordset)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})