const initialState = {
  fetching: false,
  error: false,
  data: [],
};


export default function locationsReducers(state = initialState, action) {
  switch(action) {

    case "FETCH_LOCATIONS_REQUEST":
      return {
        ...state,
        fetching: true,
      };

    case "FETCH_LOCATIONS_SUCCESS":
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
      }
  }
}