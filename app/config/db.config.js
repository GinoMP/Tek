module.exports = {
  HOST: "192.168.0.111",
  USER: "postgres",
  PASSWORD: "1234",
  DB: "itemdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
