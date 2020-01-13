const initialState = {
  fetching: false,
  error: false,
  data: [],
};


const locationsReducers = (state = initialState, action) => {
  switch(action.type) {

    case "FETCH_LOCATIONS_REQUEST":
      return {
        ...state,
        fetching: true,
      };
    case "FETCH_LOCATIONS_SUCCESS":
      console.log(action);
      return {
        ...state,
        fetching: false,
        data: action.payload,
      };
    case "FETCH_LOCATIONS_FAILURE":
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

export default locationsReducers;