import api from "../api";


const fetchLocationsRequest = () => ({
  type: "FETCH_LOCATIONS_REQUEST",
});
const fetchLocationsSuccess = locations => ({
  type: "FETCH_LOCATIONS_SUCCESS",
  payload: locations,
});
const fetchLocationsFailure = error => ({
  type: "FETCH_LOCATIONS_FAILURE",
  payload: error,
});
export const fetchLocations = dispatch => async () => {
  dispatch(fetchLocationsRequest());

  const URL = `/locations?ne_lat=37.44446960614344&ne_lng=-122.06634320318699&sw_lat=37.3995197602049&sw_lng=-122.10165616124867`;

  try {
    const response = await api.get(URL);
    const { data } = response;

    dispatch(fetchLocationsSuccess(data));
  }
  catch (e) {
    dispatch(fetchLocationsFailure(e));
  }
};