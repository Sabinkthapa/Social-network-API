
const { connect, connection } =require ('mongoose');

const connectionString = process.env.MONGOODB_URL || 'mongodb://127.0.0.1:27017/SocialNetwork';

connect(connectionString);

module.exports = connection;

