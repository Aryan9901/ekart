export const getHomeContent = (page: number) => {
  return {
    type: 'GET_HOME_CONTENT',
    payload: {
      page: page,
    },
  };
};
