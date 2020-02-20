module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'invoices',
  password: 'invoices',
  database: 'gobarber',
  define: {
    timeStamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
