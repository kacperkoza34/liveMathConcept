export const SET_PAGE = "[app] SET_PAGE";
export const SET_POSITION = "[app] SET_POSITION";
export const SET_ARTICLE_HEIGTH = "[app] SET_ARTICLE_HEIGTH";

export const setPage = payload => ({
  type: SET_PAGE,
  payload
});

export const setPosition = payload => ({
  type: SET_POSITION,
  payload
});

export const setArticleHeigth = payload => ({
  type: SET_ARTICLE_HEIGTH,
  payload
});
