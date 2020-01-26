import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ElevateAppBar from 'src/components/common/Appbar'
import CircularProgress from '@material-ui/core/CircularProgress'

const Home = props => {
  const { requestToLogin, isFetching, data } = props

  console.log(data)

  useEffect(() => {
    requestToLogin()
  }, [])

  return <div>{isFetching ? <CircularProgress /> : <ElevateAppBar />}</div>
}

Home.propTypes = {
  requestToLogin: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
}

export default Home
