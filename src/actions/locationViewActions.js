import api from "../api";


export const openLocation = dispatch => () => dispatch({
  type: "OPEN_LOCATION",
});
export const closeLocation = dispatch => () => dispatch({
  type: "CLOSE_LOCATION",
});


const fetchLocationDetailsRequest = () => ({
  type: "FETCH_LOCATION_DETAILS_REQUEST",
});
const fetchLocationDetailsSuccess = locationData => ({
  type: "FETCH_LOCATION_DETAILS_SUCCESS",
  payload: locationData,
});
const fetchLocationDetailsFailure = error => ({
  type: "FETCH_LOCATION_DETAILS_FAILURE",
  payload: error,
});
export const fetchLocationDetails = dispatch => async (locationId) => {
  dispatch(fetchLocationDetailsRequest());

  const URL = `/locations/${locationId}`;

  try {
    const response = await api.get(URL);
    const { data } = response;

    dispatch(fetchLocationDetailsSuccess(data));
  }
  catch (e) {
    dispatch(fetchLocationDetailsFailure(e));
  }
};