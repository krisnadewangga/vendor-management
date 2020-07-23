import axios from "axios"
import { api } from "../../config"

export const getData = params => {
  return async dispatch => {
    let startItem
    let limitItem

    if (Object.entries(params).length !== 0) {
      startItem = (params.page - 1) * params.perPage
      limitItem = params.perPage

      params = {
        _start : startItem,
        _limit: limitItem
      }
    } else {
      params = {
        _start : 0,
        _limit: 4
      }
    }

    await api.get('/vendor-items', { params }).then(response => {
      dispatch({
        type: "VENDOR_GET_DATA",
        data: response.data,
        totalPages: response.data.length,
        params
      })
    })
  }
}

export const getInitialData = () => {
  return async dispatch => {
    await api.get("/vendor-items").then(response => {
      dispatch({ type: "VENDOR_GET_ALL_DATA", data: response.data })
    })
  }
}

export const filterData = value => {
  return dispatch => dispatch({ type: "VENDOR_FILTER_DATA", value })
}

export const deleteData = obj => {
  return async dispatch => {
    await api.delete("/vendor-items/" + obj.id)
      .then(response => {
        alert("Item berhasil dihapus")
        dispatch({ type: "VENDOR_DELETE_DATA", obj })
      })
  }
}

export const updateData = obj => {
  return async (dispatch, getState) => {
    await api.put("/vendor-items/" + obj.id, obj)
      .then(response => {
        alert("Item berhasil diupdate")
        dispatch({ type: "VENDOR_UPDATE_DATA", obj })
      })
  }
}

export const addData = obj => {
  return async (dispatch, getState) => {
    let params = getState().dataListVendor.params
    await api.post("/vendor-items", obj).then(response => {
        alert("Item berhasil ditambahkan")
        dispatch({ type: "VENDOR_ADD_DATA", obj })
        dispatch(getData(params))
      })
  }
}
