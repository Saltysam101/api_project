import config from "./config.js";
import mysql from "mysql";

const connection = mysql.createPool(config.mysql);

export default connection;