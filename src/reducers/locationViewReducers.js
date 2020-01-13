const initialState = {
  opened: false,
  fetching: false,
  error: false,
  data: [],
};
  

const locationViewReducers = (state = initialState, action) => {
  switch(action.type) {


    case "OPEN_LOCATION":
      return {
        ...state,
        opened: true,
      };
    case "CLOSE_LOCATION":
      return {
        ...state,
        opened: false,
        fetching: false,
        error: false,
        data: [],
      };


    case "FETCH_LOCATION_DETAILS_REQUEST":
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case "FETCH_LOCATION_DETAILS_SUCCESS":
      return {
        ...state,
        fetching: false,
        data: action.payload,
      };
    case "FETCH_LOCATION_DETAILS_FAILURE":
      return {
        ...state,
        fetching: false,
        data: [],
        error: action.payload,
      };


    default:
      return {
        ...state,
      };
  }
}

export default locationViewReducers;