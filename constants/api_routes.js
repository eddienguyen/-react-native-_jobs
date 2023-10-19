const commonAPIRoute = (route = "", withBasePath = false) => {
  return withBasePath
    ? `${process.env.EXPO_PUBLIC_RAPID_API_BASE_PATH}/${route}`
    : route;
};

const API_ROUTES = {
  SEARCH: function (query = "", withBasePath = false) {
    const queries = decodeURIComponent(query); // TODO: need testing
    return commonAPIRoute(`search${queries}`, withBasePath);
  },
  FILTER: function (query = "", withBasePath = false) {
    const queries = decodeURIComponent(query); // TODO: need testing
    return commonAPIRoute(`search-filters${queries}`, withBasePath);
  },
  JOB_DETAIL: function (query = "", withBasePath = false) {
    const queries = decodeURIComponent(query); // TODO: need testing
    return commonAPIRoute(`job-details${queries}`, withBasePath);
  },
  //   SEARCH: function (query = "", withBasePath = false) {
  //     const queries = decodeURIComponent(query); // TODO: need testing
  //     return commonAPIRoute(`/search?${queries}`, withBasePath);
  //   },
};

export default API_ROUTES;
