import knex from 'knex';
import path from 'path';
const connection = knex({
    client: 'mysql',
    connection: {
        host: 'ecoleta_database_mysql',
        database: 'ecoletadb',
        user: 'ecoletadb',
        password: 'ecoletadb'
    },
    useNullAsDefault: true
});
export default connection;
