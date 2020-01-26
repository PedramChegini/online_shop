import authActionTypes from 'src/appRedux/actionTypes/auth'

const loginIsFetching = () => ({ type: authActionTypes.LOGIN_ISFETCHING })
const loginSuccess = payload => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload
})
const loginFailure = error => ({ type: authActionTypes.LOGIN_FAILURE, error })

const requesToLogin = () => dispatch => {
  dispatch(loginIsFetching())

  fetch(
    'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'
  )
    .then(response => response.json())
    .then(data => {
      dispatch(loginSuccess(data))
    })
    .catch(e => {
      dispatch(loginFailure(e))
    })
}

export default requesToLogin
