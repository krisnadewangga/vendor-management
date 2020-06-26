import axios from "axios"
import { api } from "../../config"

export const getData = params => {
  return async dispatch => {
    await api.get("/items", params).then(response => {
      dispatch({
        type: "GET_DATA",
        data: response.data,
        totalPages: response.data.lenght,
        params
      })
    })
  }
}

export const getInitialData = () => {
  return async dispatch => {
    await api.get("/items").then(response => {
      dispatch({ type: "GET_ALL_DATA", data: response.data })
    })
  }
}

export const filterData = value => {
  return dispatch => dispatch({ type: "FILTER_DATA", value })
}

export const deleteData = obj => {
  return dispatch => {
    axios
      .post("/api/datalist/delete-data", {
        obj
      })
      .then(response => {
        dispatch({ type: "DELETE_DATA", obj })
      })
  }
}

export const updateData = obj => {
  return (dispatch, getState) => {
    axios
      .post("/api/datalist/update-data", {
        obj
      })
      .then(response => {
        dispatch({ type: "UPDATE_DATA", obj })
      })
  }
}

export const addData = obj => {
  return (dispatch, getState) => {
    let params = getState().dataList.params
    axios
      .post("/api/datalist/add-data", {
        obj
      })
      .then(response => {
        dispatch({ type: "ADD_DATA", obj })
        dispatch(getData(params))
      })
  }
}

export const addDataItemKategori = obj => {
  return (dispatch, getState) => {
    let params = getState().dataList.params
    if(obj.category === ""){
      alert("Data tidak boleh kosong")
    }
    else{
      api
        .post("/item-categories", 
          obj
        )
        .then(response => {
        alert("Kategori berhasil ditambahkan")
          dispatch({ type: "ADD_DATA", obj })
          dispatch(getData(params))
        })
        .catch(response => {
          console.log(obj)
          console.log(response)
        })
    }
  }
}
