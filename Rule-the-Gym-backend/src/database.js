const {Client} = require('pg')

const connection = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'nick2001',
    database: 'fitness-web-app',
});

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if (error) reject(error);
                resolve({ results, fields });
            })
        }),
    end: () => connection.end(),
}