import authActionTypes from 'src/appRedux/actionTypes/auth'

const defualtState = {
  isFetching: false,
  data: [],
  error: null
}

export default (state = defualtState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_ISFETCHING:
      return {
        ...state,
        isFetching: true
      }
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      }
    case authActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
