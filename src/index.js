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

const SignUp_All = async (TenTK, MatKhau, LoaiTK, CMND, Sdt, Email, SoNha, Duong, Quan, ThanhPho) => {
    try {
        console.log("TenTK###", TenTK);
        console.log("MatKhau###", MatKhau);
        console.log("LoaiTK###", LoaiTK);
        console.log("CMND###", CMND);
        console.log("Sdt###", Sdt);
        console.log("Email###", Email);
        console.log("SoNha###", SoNha);
        console.log("Duong###", Duong);
        console.log("Quan###", Quan);
        console.log("Thanhpho###", ThanhPho);
        const pool = await poolPromise;
        const result = await pool
            .request()
            .input("TenTK", TenTK)
            .input("MatKhau", MatKhau)
            .input("LoaiTK", LoaiTK)
            .input("CMND", CMND)
            .input("Sdt", Sdt)
            .input("Email", Email)
            .input("SoNha", SoNha)
            .input("Duong", Duong)
            .input("Quan", Quan)
            .input("ThanhPho", ThanhPho)
            .query("Exec SignUp_All @TenTK, @MatKhau, @LoaiTK, @CMND, @Sdt, @Email, @SoNha, @Duong, @Quan, @ThanhPho");

        console.log(result);

        return result;
    }
    catch (err) {

    }
}

const Edit_All = async (MaTK, TenTK, MatKhau) => {
    try {
        console.log("TenTK###", TenTK);
        console.log("MatKhau###", MatKhau);
        console.log("MaTK###", MaTK);
        const pool = await poolPromise;
        const result = await pool
            .request()
            .input("TenTK", TenTK)
            .input("MatKhau", MatKhau)
            .input("MaTK", MaTK)
            .query("Exec Edit_All @MaTK, @TenTK, @MatKhau");

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
    SignUp_All,
    Edit_All
}
