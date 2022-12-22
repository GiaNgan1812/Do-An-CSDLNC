const { sql, poolPromise } = require("./databases/mssql.database");
// //const monanCardTemplate = document.querySelector("[data-monan-template]")

// const searchInput = document.querySelector("[data-search]")
// let users = []

// searchInput.addEventListener("input", e => {
//     const value = e.target.value.toLowerCase()
//     users.forEach(user => {
//         const isVisible =
//             user.name.toLowerCase().includes(value) ||
//             user.email.toLowerCase().includes(value)
//         user.element.classList.toggle("hide", !isVisible)
//     })
// })

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

const queryExample2 = async (ma_khachhang) => {
    try {
        console.log("ma_khachhang###", ma_khachhang);
        const pool = await poolPromise;
        const result = await pool
            .request()
            .input("makh", ma_khachhang)
            .query("Exec LogIn_All 'Claire Sanford' 'DGSC29'");

        console.table(result.recordset);

        return result;
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    queryExample1,
    queryExample2,
    TraCuuMonAn
}
