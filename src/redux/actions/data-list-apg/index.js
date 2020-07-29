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

    await api.get("/items", { params }).then(response => {
      dispatch({
        type: "GET_DATA",
        data: response.data,
        totalPages: response.data.length,
        params
      })
    })
  }
}

export const getDataKategori = params => {
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

    await api.get("/item-categories", { params }).then(response => {
      dispatch({
        type: "GET_DATA",
        data: response.data,
        totalPages: response.data.length,
        params
      })
    })
  }
}

export const getDataSubKategori = params => {
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

    await api.get("/item-sub-categories", { params }).then(response => {
      dispatch({
        type: "GET_DATA",
        data: response.data,
        totalPages: response.data.length,
        params
      })
    })
  }
}

export const getDataSatuan = params => {
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

    await api.get("/item-units", { params }).then(response => {
      dispatch({
        type: "GET_DATA",
        data: response.data,
        totalPages: response.data.length,
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

export const getInitialDataKategori = () => {
  return async dispatch => {
    await api.get("/item-categories").then(response => {
      dispatch({ type: "GET_ALL_DATA_KATEGORI", data: response.data })
    })
  }
}

export const getInitialDataSubKategori = () => {
  return async dispatch => {
    await api.get("/item-sub-categories").then(response => {
      dispatch({ type: "GET_ALL_DATA_SUB_KATEGORI", data: response.data })
    })
  }
}

export const getInitialDataSatuan = () => {
  return async dispatch => {
    await api.get("/item-units").then(response => {
      dispatch({ type: "GET_ALL_DATA_UNIT", data: response.data })
    })
  }
}

export const filterData = value => {
  return dispatch => dispatch({ type: "FILTER_DATA", value })
}

export const filterDataKategori = value => {
  return dispatch => dispatch({ type: "FILTER_DATA_CATEGORY", value })
}

export const filterDataSubKategori = value => {
  return dispatch => dispatch({ type: "FILTER_DATA_SUB_CATEGORY", value })
}

export const filterDataSatuan = value => {
  return dispatch => dispatch({ type: "FILTER_DATA_SATUAN", value })
}

export const deleteData = (obj, apiPath) => {
  return dispatch => {
    api.delete(apiPath + obj.id, {
        obj
      })
      .then(response => {
        dispatch({ type: "DELETE_DATA", obj })
      })
  }
}


// export const updateData = obj => {
//   return (dispatch, getState) => {
//     axios
//       .post("/api/datalist/update-data", {
//         obj
//       })
//       .then(response => {
//         dispatch({ type: "UPDATE_DATA", obj })
//       })
//   }
// }

export const updateData = params => {
  return async dispatch => {
    await api.get("/items" + params.id).then(response => {
      console.log(response, "UPDATEE")
      dispatch({
        type: "GET_DATA",
        data: response.data,
        totalPages: 1,
        params
      })
    })
  }
}


export const updateDataKategori = obj => {
  return (dispatch, getState) => {
    api.put("/item-categories/" + obj.id, {
        category: obj.category
      })
      .then(response => {
        alert("Berhasil update data")
        dispatch({ type: "UPDATE_DATA", obj })
        dispatch(getDataKategori(obj))
      })
  }
}

export const updateDataSubKategori = obj => {
  return (dispatch, getState) => {
    api.put("/item-sub-categories/" + obj.id, {
        sub_category: obj.sub_category
      })
      .then(response => {
        alert("Berhasil update data")
        dispatch({ type: "UPDATE_DATA", obj })
        dispatch(getDataSubKategori(obj))
      })
  }
}

export const updateDataSatuan = obj => {
  return (dispatch, getState) => {
    api.put("/item-units/" + obj.id, {
        unit: obj.unit
      })
      .then(response => {
        alert("Berhasil update data")
        dispatch({ type: "UPDATE_DATA", obj })
        dispatch(getDataSatuan(obj))
      })
  }
}

export const addData = obj => {
  return (dispatch, getState) => {
    let params = getState().dataListApg.params
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

export const addDataItem = obj => {
  return (dispatch, getState) => {
    let params = getState().dataListApg.params
    // if(obj.file === undefined){
    //   alert("Gambar tidak boleh kosong")
    // } else if(obj.nama_item === ""){
    //   alert("Nama item tidak boleh kosong")
    // } else if(obj.item_category === ""){
    //   alert("Kategori tidak boleh kosong")
    // } else if(obj.item_sub_category === ""){
    //   alert("Sub kategori tidak boleh kosong")
    // } else if(obj.item_unit === ""){
    //   alert("Satuan tidak boleh kosong")
    // }
    // else{

    // }
    const formData = new FormData()
    formData.append('files.gambar', obj.file.file)
    formData.append('data', JSON.stringify(obj))
    api
      .post("/items", formData, { headers: {'content-type': 'multipart/form-data'} })
      .then(response => {
      alert("Item berhasil ditambahkan")
        dispatch({ type: "ADD_DATA", obj })
        dispatch(getData({params}))
      })
      .catch(response => {
        console.log(obj)
        console.log(response.response)
      })
  }
}

export const addDataKategori = obj => {
  return (dispatch, getState) => {
    let params = getState().dataListApg.params
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
          dispatch(getDataKategori({params}))
        })
        .catch(response => {
          console.log(obj)
          console.log(response.response)
        })
    }
  }
}

export const addDataSubKategori = obj => {
  return (dispatch, getState) => {
    let params = getState().dataListApg.params
    if(obj.sub_category === ""){
      alert("Data tidak boleh kosong")
    }
    else{
      api
        .post("/item-sub-categories",
          obj
        )
        .then(response => {
        alert("Sub kategori berhasil ditambahkan")
          dispatch({ type: "ADD_DATA", obj })
          dispatch(getDataSubKategori({params}))
        })
        .catch(response => {
          console.log(obj)
          console.log(response.response)
        })
    }
  }
}

export const addDataSatuan = obj => {
  return (dispatch, getState) => {
    let params = getState().dataListApg.params
    if(obj.unit === ""){
      alert("Data tidak boleh kosong")
    }
    else{
      api
        .post("/item-units",
          obj
        )
        .then(response => {
        alert("Unit berhasil ditambahkan")
          dispatch({ type: "ADD_DATA", obj })
          dispatch(getDataSatuan({params}))
        })
        .catch(response => {
          console.log(obj)
          console.log(response.response)
        })
    }
  }
}
