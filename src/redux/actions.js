export const SET_PAGE = "[app] SET_PAGE";
export const SET_POSITION = "[app] SET_POSITION";
export const SET_ARTICLE_HEIGTH = "[app] SET_ARTICLE_HEIGTH";
export const SET_CURRENT_TASK = "[app] SET_CURRENT_TASK";
export const CLEAR_CURRENT_TASK = "[app] CLEAR_CURRENT_TASK";
export const MARK_TASK_AS_RESOLVED = "[app] MARK_TASK_AS_RESOLVED";

export const setPage = payload => ({
  type: SET_PAGE,
  payload
});

export const setPosition = payload => ({
  type: SET_POSITION,
  payload
});

export const setCurrentTask = payload => ({
  type: SET_CURRENT_TASK,
  payload
});

export const clearCurrentTask = () => ({
  type: CLEAR_CURRENT_TASK
});

export const markTaskAsResolved = () => ({
  type: MARK_TASK_AS_RESOLVED
});
