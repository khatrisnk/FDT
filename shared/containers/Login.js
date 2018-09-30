import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getLogin } from '../actions/LoginActions';
import LoginComponent from '../components/Login';
class Login extends React.PureComponent {
    render() {
        return <LoginComponent {...this.props}/>
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}
const mapDispatchToProps = dispatch => {
    return {
      getLogin: (data) => {
        dispatch(getLogin(data))
      }
    }
}

Login.propTypes = {
  userData: PropTypes.object,
  getLogin: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);