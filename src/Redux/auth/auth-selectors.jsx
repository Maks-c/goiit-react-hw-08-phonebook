const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const authSelectors = {
  getUserName,
  getIsLoggedIn,
};


export default authSelectors


