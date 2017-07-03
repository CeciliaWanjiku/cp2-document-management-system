import * as types from '../constants/appConstants';
import initialState from './initialState';

export default function loginUserReducer(state = initialState.loginUser, action) {
  switch (action.type) {
    case types.USER_LOGIN_SUCCESS:
      return action.loginUser

    case types.USER_LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
}
