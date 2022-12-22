const sql = require("mssql/msnodesqlv8");
const poolPromise = new sql.ConnectionPool(require("../configs/mssql.config"))
    .connect()
    .then((pool) => {
        console.log("Connect to MSSQL");
        return pool;
    })
    .catch((err) =>
        console.error("Database Connection failed! Bad config: ", err)
    );

module.exports = {
    sql,
    poolPromise,
};
