import * as Actions from './actions';

const defaultState = {
  projects: [],
  employees: [],
  technologies: [],
  selectedProject: null,
  selectedEmployee: null,
  selectedTechnology: null,
  dragged: null,
  loading: false,
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.REQUEST_START:
      return { ...state, loading: true };
    case Actions.REQUEST_FINISH:
      return { ...state, loading: false };
    case Actions.ADD_PROJECTS:
      return { ...state, projects: payload };
    case Actions.ADD_EMPLOYEES:
      return { ...state, employees: payload };
    case Actions.ADD_TECHS:
      return { ...state, technologies: payload };
    case Actions.USER_SELECT_PROJECT:
      return { ...state, selectedProject: payload };
    case Actions.USER_SELECT_EMPLOYEE:
      return { ...state, selectedEmployee: payload };
    case Actions.USER_SELECT_TECH:
      return { ...state, selectedTechnology: payload };
    case Actions.USER_CLOSE_PROJECT:
      return { ...state, selectedProject: null };
    case Actions.USER_CLOSE_EMPLOYEE:
      return { ...state, selectedEmployee: null };
    case Actions.USER_CLOSE_TECH:
      return { ...state, selectedTechnology: null};
    case Actions.USER_DRAG_START_TECH:
      return { ...state, dragged: payload };
    case Actions.USER_DRAG_STOP_TECH:
      return { ...state, dragged: null };
    default:
      return state;
  }
}
