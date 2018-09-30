import {
    GET_PROJECTS,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_ERROR,
    GET_PROJECT_BYID,
    GET_PROJECT_BYID_SUCCESS,
    GET_PROJECT_BYID_ERROR
} from '../constants';

export const getProjects = (data) => {
    return {
        type: GET_PROJECTS,
        data
    }
}

export const getProjectsSuccess = (data) => {
    return {
        type: GET_PROJECTS_SUCCESS,
        data
    }
}

export const getProjectsError = (error) => {
    return {
        type: GET_PROJECTS_ERROR,
        error
    }
}

export const getProjectById = (data) => {
    return {
        type: GET_PROJECT_BYID,
        data
    }
}

export const getProjectByIdSuccess = (data) => {
    return {
        type: GET_PROJECT_BYID_SUCCESS,
        data
    }
}

export const getProjectByIdError = (error) => {
    return {
        type: GET_PROJECT_BYID_ERROR,
        error
    }
}
