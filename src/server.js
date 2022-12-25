const express = require('express');
const path = require('path');
const mssqlConfig = require('./index.js');
const configViewEngine = require('./configs/viewEngine');

const app = express()
const port = 3000;
const ViewEngine = configViewEngine.configViewEngine(app);
app.use(express.static(path.join(__dirname, "/public/")));

app.get('/', async (req, res) => {
    //const Query1 = await mssqlConfig.queryExample1() //require('./index').queryExample1
    res.render('Home.ejs')
    //res.json(Query1.recordset)
})

app.get('/Home', async (req, res) => {
    //const Query1 = await mssqlConfig.queryExample1() //require('./index').queryExample1
    res.render('Home.ejs')
    //res.json(Query1.recordset)
})

app.get('/search', async (req, res) => {
    try {
        console.log(req.query.keyword);
        const result = await mssqlConfig.TraCuuMonAn(req.query.keyword);
        const monAn = result.recordsets[0][0];
        res.render('Search.ejs', { monAn });
        // console.log(result);
    }
    catch (err) {
        res.render('Error.ejs', { message: "Món ăn này không tồn tại " });
    }
})

app.get('/Login', async (req, res) => {
    try {
        //console.log(req.query.TenTK);
        //console.log(req.query.MatKhau);
        res.render('Login.ejs');
    }
    catch (err) {
        res.render('Error.ejs', { message: "Đăng nhập thất bại " });
    }
})

app.get('/Login/LoginSucess', async (req, res) => {
    try {
        console.log(req.query.TenTK);
        console.log(req.query.MatKhau);
        const result = await mssqlConfig.LogIn_All(req.query.TenTK, req.query.MatKhau);
        const Ketqua = result.recordsets[0][0]
        res.render('LoginSucess.ejs', { Ketqua });
    }
    catch (err) {
        res.render('Error.ejs', { message: "Đăng nhập thất bại! Kiểm tra lại tên tài khoản hoặc mật khẩu!" });
    }
})

app.get('/SignUp', async (req, res) => {
    try {
        res.render('SignUp.ejs');
    }
    catch (err) {
        res.render('Error.ejs', { message: "Đăng ký thất bại " });
    }
})

app.get('/SignUp/SignUpSucess', async (req, res) => {
    try {
        console.log(req.query.TenTK);
        console.log(req.query.MatKhau);
        console.log(req.query.LoaiTK);
        const result = await mssqlConfig.SignUp_All(req.query.TenTK, req.query.MatKhau, req.query.LoaiTK);
        const Ketqua = result.recordsets[0][0]
        res.render('SignUpSucess.ejs', { Ketqua });
    }
    catch (err) {
        res.render('Error.ejs', { message: "Đăng ký thất bại! Tên tài khoản đã có người dùng! " });
    }
})

app.get('/EditTK', async (req, res) => {
    try {
        res.render('EditTK.ejs');
    }
    catch (err) {
        res.render('Error.ejs', { message: "Chỉnh sửa thất bại " });
    }
})

app.get('/EditTK/EditSucess', async (req, res) => {
    try {
        console.log(req.query.TenTK);
        console.log(req.query.MatKhau);
        console.log(req.query.MaTK);
        const result = await mssqlConfig.Edit_All(req.query.MaTK, req.query.TenTK, req.query.MatKhau);
        const Ketqua = result.recordsets[0][0]
        res.render('EditSucess.ejs', { Ketqua });
    }
    catch (err) {
        res.render('Error.ejs', { message: "Đăng ký thất bại! Tên tài khoản đã có người dùng! " });
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})