import mysql from "mysql2";
import config from "../config/db.js";

const pool = mysql.createPool(config);

export const execute = (query, callback, errCallback) => {
  pool.getConnection((err, connection) => {
    if (err) {
      errCallback
      return;
    }
    connection.execute(query, callback);
  });
};
