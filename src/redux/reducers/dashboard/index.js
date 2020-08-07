const initialState = {
  dashboardVendor: [],
  dashboardApg: []
}

const DataListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_DASHBOARD_VENDOR":{
      return {
        ...state,
        dashboardVendor: action.data,
      }
    }
    case "GET_DATA_DASHBOARD_APG":{
      return {
        ...state,
        dashboardApg: action.data,
      }
    }
    default:
      return state
  }
}

export default DataListReducer
