import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        host: 'ecoleta_database_mysql',
        database: 'ecoletadb',
        user: 'ecoletadb',
        password: 'ecoletadb'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
};