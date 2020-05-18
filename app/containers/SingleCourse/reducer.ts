import { fromJS } from "immutable";

import {
  COURSE_ACTION,
  COURSE_ACTION_SUCCESS,
  COURSE_ACTION_ERROR
} from "./constants";

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  course: false
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case COURSE_ACTION:
      return state.set("loading", true).set("error", false);
    case COURSE_ACTION_SUCCESS:
      // TODO: Remove this mock when api is ready
      action.course.purchase_url = "https://asystentciazy.pl/";
      action.course.modules[0].lessons[0].blocked = true;
      return state.set("loading", false).set("course", action.course);
    case COURSE_ACTION_ERROR:
      return state.set("loading", false).set("error", action.error);
    default:
      return state;
  }
}

export default appReducer;
