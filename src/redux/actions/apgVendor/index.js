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

export const getInitialDataVendorAktif = () => {
  return async dispatch => {
    await api.get("/vendors").then(response => {
      dispatch({ type: "VENDOR_AKTIF_GET_ALL_DATA", data: response.data })
    })
  }
}

export const getDataVendorInReview = params => {
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

    await api.get("/vendors-inreview").then(response => {
      dispatch({
        type: "VENDOR_IN_REVIEW_GET_DATA",
        data: response.data,
        totalPages: response.data.length,
        params
      })
    })
  }
}

export const getInitialDataVendorInReview = () => {
  return async dispatch => {
    await api.get("/vendors-inreview").then(response => {
      dispatch({ type: "VENDOR_IN_REVIEW_GET_ALL_DATA", data: response.data })
    })
  }
}

export const getDataVendorProblem = params => {
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

    await api.get("/vendors-problem").then(response => {
      dispatch({
        type: "VENDOR_PROBLEM_GET_DATA",
        data: response.data,
        totalPages: response.data.length,
        params
      })
    })
  }
}

export const getInitialDataVendorProblem = () => {
  return async dispatch => {
    await api.get("/vendors-problem").then(response => {
      dispatch({ type: "VENDOR_PROBLEM_GET_ALL_DATA", data: response.data })
    })
  }
}

export const getDataVendorById = obj => {
  return async dispatch => {
    await api.get(`/vendors/${obj.id}`).then(response => {
      dispatch({ type: "VENDOR_GET_DATA_BY_ID", data: response.data })
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

export const vendorTerverifikasi = obj => {
  return (dispatch, getState) => {
    api.get("/vendors-confirm/" + obj.id)
      .then(response => {
        alert("Status vendor telah diperbarui")
        dispatch({ type: "VENDOR_TERVERIFIKASI", obj })
      })
  }
}

export const vendorPersyaratanBelumTerpenuhi = obj => {
  return (dispatch, getState) => {
    api.get("/vendors-unqualified/" + obj.id)
      .then(response => {
        alert("Status vendor telah diperbarui")
        dispatch({ type: "VENDOR_PERSYARATAN_BELUM_TERPENUHI", obj })
      })
  }
}

export const getDataVendorKategori = params => {
  return async dispatch => {
    let startItem
    let limitItem

    if (Object.entries(params).length !== 0) {
      startItem = params._start !== undefined ? params._start : (params.page - 1) * params.perPage
      limitItem = params._limit !== undefined ? params._limit : params.perPage

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

    await api.get("/vendor-categories", { params }).then(response => {
      dispatch({
        type: "VENDOR_KATEGORI_GET_DATA",
        data: response.data,
        totalPages: response.data.length,
        params
      })
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

export const deleteDataVendorKategori = obj => {
  return async dispatch => {
    await api.delete("/vendor-categories/" + obj.id)
      .then(response => {
        alert("Item berhasil dihapus")
        dispatch({ type: "VENDOR_KATEGORI_DELETE_DATA", obj })
      })
  }
}

export const updateDataVendorKategori = obj => {
  return async (dispatch, getState) => {
    await api.put("/vendor-categories/" + obj.id, obj)
      .then(response => {
        alert("Item berhasil diupdate")
        dispatch({ type: "VENDOR_KATEGORI_UPDATE_DATA", obj })
      })
  }
}

export const addDataVendorKategori = obj => {
  return async (dispatch, getState) => {
    let params = getState().apgVendor.params
    await api.post("/vendor-categories", obj).then(response => {
        alert("Item berhasil ditambahkan")
        dispatch({ type: "VENDOR_KATEGORI_ADD_DATA", obj })
        dispatch(getDataVendorKategori(params))
      })
  }
}

export const getDataVendorKelas = params => {
  return async dispatch => {
    let startItem
    let limitItem

    if (Object.entries(params).length !== 0) {
      startItem = params._start !== undefined ? params._start : (params.page - 1) * params.perPage
      limitItem = params._limit !== undefined ? params._limit : params.perPage

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

    await api.get("/vendor-classes", { params }).then(response => {
      dispatch({
        type: "VENDOR_KELAS_GET_DATA",
        data: response.data,
        totalPages: response.data.length,
        params
      })
    })
  }
}

export const getInitialDataVendorKelas = () => {
  return async dispatch => {
    await api.get("/vendor-classes").then(response => {
      dispatch({ type: "VENDOR_KELAS_GET_ALL_DATA", data: response.data })
    })
  }
}

export const deleteDataVendorKelas = obj => {
  return async dispatch => {
    await api.delete("/vendor-classes/" + obj.id)
      .then(response => {
        alert("Kelas vendor berhasil dihapus")
        dispatch({ type: "VENDOR_KELAS_DELETE_DATA", obj })
      })
  }
}

export const updateDataVendorKelas = obj => {
  return async (dispatch, getState) => {
    await api.put("/vendor-classes/" + obj.id, obj)
      .then(response => {
        alert("Kelas vendor berhasil diupdate")
        dispatch({ type: "VENDOR_KELAS_UPDATE_DATA", obj })
      })
  }
}

export const addDataVendorKelas = obj => {
  return async (dispatch, getState) => {
    let params = getState().apgVendor.params
    await api.post("/vendor-classes", obj).then(response => {
        alert("Kelas vendor berhasil ditambahkan")
        dispatch({ type: "VENDOR_KELAS_ADD_DATA", obj })
        dispatch(getDataVendorKelas(params))
      })
  }
}

export const importDataVendorKelas = file => {
  return async (dispatch, getState) => {
    let params = getState().apgVendor.params
    const formData = new FormData()
    formData.append('data', JSON.stringify({}))
    formData.append('files.import', file)
    await api.post("/vendor-classes-import", formData, { headers: {'content-type': 'multipart/form-data'} }).then(response => {
        alert("Kelas vendor berhasil diimpor")
        dispatch({ type: "VENDOR_KELAS_IMPORT_DATA", obj: response.data })
        dispatch(getDataVendorKelas(params))
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
