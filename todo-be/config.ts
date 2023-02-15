export const config = {
  port: 3000,
  hostname: 'localhost',
  db: {
    host: 'localhost',
    port: 3306,
    database: 'todo',
    user: 'root',
    password: '',
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    namedPlaceholders: true,
  }
};
