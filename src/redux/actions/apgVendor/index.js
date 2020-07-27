import { api } from "../../config"
import { param } from "jquery"

export const getDataVendorAktif = params => {
  return async dispatch => {
    let startItem
    let limitItem

    if (Object.entries(params).length !== 0) {
      /*
      dilanjut setelah CRUD
      let kategori = params.kategori === undefined ? false : Object.keys(params.kategori).length !== 0 ? params.kategori : false;
      let provinsi = params.provinsi === undefined ? false : Object.keys(params.provinsi).length !== 0 ? params.provinsi : false;
      let kota = params.kota === undefined ? false : Object.keys(params.kota).length !== 0 ? params.kota : false;
      */

      startItem = (params.page - 1) * params.perPage
      limitItem = params.perPage

      params = {
        _start : startItem,
        _limit: limitItem,
      }

    } else {
      params = {
        _start : 0,
        _limit: 4
      }
    }

    await api.get("/vendors", { params }).then(response => {
      dispatch({
        type: "VENDOR_AKTIF_GET_DATA",
        data: response.data,
        totalPages: response.data.length,
        params
      })
    })
  }
}

export const getDataVendorAktifById = obj => {
  return async dispatch => {
    await api.get(`/vendors/${obj.id}`).then(response => {
      dispatch({ type: "VENDOR_AKTIF_GET_DATA_BY_ID", data: response.data })
    })
  }
}

export const getInitialDataVendorAktif = () => {
  return async dispatch => {
    await api.get("/vendors").then(response => {
      dispatch({ type: "VENDOR_AKTIF_GET_ALL_DATA", data: response.data })
    })
  }
}

export const filterData = value => {
  return dispatch => dispatch({ type: "FILTER_DATA", value })
}

export const updateDataVendorAktif = obj => {
  return (dispatch, getState) => {
    api.put("/vendors/" + obj.id, obj)
      .then(response => {
        alert("Vendor berhasil diupdate")
        dispatch({ type: "VENDOR_AKTIF_UPDATE_DATA", obj })
      })
  }
}

export const getInitialDataVendorKategori = () => {
  return async dispatch => {
    await api.get("/vendor-categories").then(response => {
      dispatch({ type: "VENDOR_KATEGORI_GET_ALL_DATA", data: response.data })
    })
  }
}

export const getInitialDataProvinsi = () => {
  return async dispatch => {
    await api.get("/reg-provinces").then(response => {
      dispatch({ type: "PROVINSI_GET_ALL_DATA", data: response.data })
    })
  }
}

export const getInitialDataKota = () => {
  return async dispatch => {
    await api.get("/reg-regencies").then(response => {
      dispatch({ type: "KOTA_GET_ALL_DATA", data: response.data })
    })
  }
}

export const deleteData = obj => {
  return dispatch => {
    api.post("/api/datalist/delete-data", {
        obj
      })
      .then(response => {
        dispatch({ type: "DELETE_DATA", obj })
      })
  }
}

// export const addData = obj => {
//   return (dispatch, getState) => {
//     let params = getState().dataList.params
//     api.post("/api/datalist/add-data", {
//         obj
//       })
//       .then(response => {
//         dispatch({ type: "ADD_DATA", obj })
//         dispatch(getData(params))
//       })
//   }
// }

// export const addDataItemKategori = obj => {
//   return (dispatch, getState) => {
//     let params = getState().dataList.params
//     if(obj.category === ""){
//       alert("Data tidak boleh kosong")
//     }
//     else{
//       api.post("/item-categories",
//           obj
//         )
//         .then(response => {
//         alert("Kategori berhasil ditambahkan")
//           dispatch({ type: "ADD_DATA", obj })
//           dispatch(getData(params))
//         })
//         .catch(response => {
//           console.log(obj)
//           console.log(response)
//         })
//     }
//   }
// }
