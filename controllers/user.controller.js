import query from "../db/query.js";

const findAll = async() => {
    return query("SELECT id, FirstName, LastName, Email FROM users");
};

const findOne = async(id) => {
    return query("SELECT id, FirstName, LastName, Email FROM users WHERE id = ?", [
        id
    ]);
};

const addOne = async(user) => {
    return await query("INSERT INTO users SET ?", [user]);
};

const updateOne = async(id, user) => {
    return await query("UPDATE users SET ? WHERE id = ?", [
        user,
        id,
    ]);
};

const removeOne = async(id) => {
    return await query("DELETE FROM users WHERE id = ?", [id]);
};

export default { findAll, findOne, addOne, updateOne, removeOne };