import connection from "./index.js";

const query = (qryStr, values) => {
    return new Promise((resovle, reject) => {
        connection.query(qryStr, values, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resovle(results);
            }
        })
    })

}

export default query;