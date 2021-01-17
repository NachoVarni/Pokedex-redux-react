const InitialState = {
  userInfo: {}, 
  isAuthorized: false
};

export const pokeLogin = (state = InitialState, action) => {
  switch (action.type) {
    case 'CHANGE_USER_INFO':
      const {userInfo} = state
      return {
        userInfo: action.userData,
        isAuthorized: true
      }
    
        default:
          return state;
  }
};