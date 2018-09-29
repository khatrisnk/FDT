import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getLogin } from '../actions/LoginActions';
class Login extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getLogin();
    }
    render() {
        return <div>Login Page</div>
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}
const mapDispatchToProps = dispatch => {
    return {
      getLogin: () => {
        dispatch(getLogin({name: 'Sid'}))
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