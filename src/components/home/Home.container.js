import { connect } from 'react-redux'
import HomePresentation from 'src/components/home/Home.presentation'
import requestToLogin from 'src/appRedux/actions/login'

const mapStateToProps = state => ({
  isFetching: state.auth.login.isFetching,
  data: state.auth.login.data
})

const mapDispatchToProps = dispatch => ({
  requestToLogin: () => dispatch(requestToLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePresentation)
