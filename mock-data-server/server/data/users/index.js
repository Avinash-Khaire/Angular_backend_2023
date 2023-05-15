const getUsers = require('./json/getUsers.json');

function getUsersData() {
  return getUsers.data.users;
}

module.exports = {
  getUsersData
};
