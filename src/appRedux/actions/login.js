import authActionTypes from 'src/appRedux/actionTypes/auth'

const loginIsFetching = () => ({ type: authActionTypes.LOGIN_ISFETCHING })
const loginSuccess = () => ({ type: authActionTypes.LOGIN_SUCCESS })
const loginFailure = () => ({ type: authActionTypes.LOGIN_FAILURE })
