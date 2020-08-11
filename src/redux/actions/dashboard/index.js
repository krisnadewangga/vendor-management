import { api } from "../../config"

export const getDashboardVendor = params => {
  return async dispatch => {
    await api.get('/dashboard-vendor').then(response => {
      dispatch({
        type: "GET_DATA_DASHBOARD_VENDOR",
        data: response.data,
      })
    })
  }
}

export const getDashboardApg = () => {
  return async dispatch => {
    await api.get('/dashboard-apg').then(response => {
      dispatch({
        type: "GET_DATA_DASHBOARD_APG",
        data: response.data,
      })
    })
  }
}
