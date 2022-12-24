const { sql, poolPromise } = require("./databases/mssql.database");

const queryExample1 = async () => {
    try {
        const pool = await poolPromise;
        const result = await pool.query("Exec Search_All '0SNB0WO30VJIX3D61X'");
        console.log(result.recordset)
        return result;
    } catch (err) {
        console.error(err);
    }
};

const TraCuuMonAn = async (TenMonAn) => {
    try {
        console.log("TenMonAn###", TenMonAn);
        const pool = await poolPromise;
        const result = await pool
            .request()
            .input("TenMonAn", TenMonAn)
            .query("Exec Search_All @TenMonAn");

        console.table(result.recordset);

        return result;
    }
    catch (err) {

    }
}

const LogIn_All = async (TenTK, MatKhau) => {
    try {
        console.log("TenTK###", TenTK);
        console.log("MatKhau###", MatKhau);
        const pool = await poolPromise;
        const result = await pool
            .request()
            .input("TenTK", TenTK)
            .input("MatKhau", MatKhau)
            .query("Exec LogIn_All @TenTK, @MatKhau");

        console.log(result);

        return result;
    }
    catch (err) {

    }
}

const SignUp_All = async (TenTK, MatKhau, LoaiTK) => {
    try {
        console.log("TenTK###", TenTK);
        console.log("MatKhau###", MatKhau);
        console.log("LoaiTK###", LoaiTK);
        const pool = await poolPromise;
        const result = await pool
            .request()
            .input("TenTK", TenTK)
            .input("MatKhau", MatKhau)
            .input("LoaiTK", LoaiTK)
            .query("Exec SignUp_All @TenTK, @MatKhau, @LoaiTK");

        console.log(result);

        return result;
    }
    catch (err) {

    }
}
module.exports = {
    queryExample1,
    TraCuuMonAn,
    LogIn_All,
    SignUp_All
}
