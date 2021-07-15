import {
    ConnectionOptions,
    Connection,
    createConnection,
    ConnectionManager,
    getConnectionManager,
    Entity
} from "typeorm";

const databases = {
    development: `../data/db.sqlite`,
    test: `../data/db.test.sqlite`
}

const isTest = process.env.NODE_ENV === "test"

class Database {
    private connectionManager: ConnectionManager;

    constructor() {
        this.connectionManager = getConnectionManager();
    }

    async getConnection(): Promise<Connection> {
        const CONNECTION_NAME = 'default';

        let connection: Connection;

        if (this.connectionManager.has(CONNECTION_NAME)) {
            // console.log(`Database.getConnection()-using existing connection::: ${CONNECTION_NAME}`);
            connection = await this.connectionManager.get(CONNECTION_NAME);

            if (!connection.isConnected) {
                connection = await connection.connect();
            }
        } else {
            // console.log('Database.getConnection()-creating connection ...');

            const connectionOptions: ConnectionOptions = {
                type: "sqlite",
                database: databases[process.env.NODE_ENV],
                entities: [
                    "src/entity/**/*.ts"
                ],
                dropSchema: !!isTest,
                logging: !isTest,
                synchronize: !!isTest,
                migrationsRun: !!isTest,
            };

            connection = await createConnection(connectionOptions);
        }

        return connection;
    }


    async getRepository(entity) {
        const connection = await this.getConnection();
        return connection.getRepository(entity)
    }
}

export default new Database();