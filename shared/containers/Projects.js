import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectsComponent from '../components/Projects';
import { getProjects } from '../actions/ProjectsAction';
class Projects extends React.PureComponent {
    componentDidMount() {
        this.props.getProjects(this.props.userData.config.auth);
    }
    render() {
        return <ProjectsComponent {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userData,
        projects: state.projects
    }
}
const mapDispatchToProps = dispatch => {
    return {
      getProjects: (data) => {
        dispatch(getProjects(data))
      }
    }
}

Projects.propTypes = {
  userData: PropTypes.object,
  projects: PropTypes.object,
  getProjects: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);