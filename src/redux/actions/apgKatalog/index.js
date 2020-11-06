import { api } from "../../config"
import { param } from "jquery"

// export const getDataVendorAktif = params => {
//   return async dispatch => {
//     let startItem
//     let limitItem

//     if (Object.entries(params).length !== 0) {

//       startItem = (params.page - 1) * params.perPage
//       limitItem = params.perPage

//       params = {
//         _start : startItem,
//         _limit: limitItem,
//       }

//     } else {
//       params = {
//         _start : 0,
//         _limit: 4
//       }
//     }

//     await api.get("/vendors", { params }).then(response => {
//       dispatch({
//         type: "VENDOR_AKTIF_GET_DATA",
//         data: response.data,
//         totalPages: response.data.length,
//         params
//       })
//     })
//   }
// }

// export const getInitialDataVendorAktif = () => {
//   return async dispatch => {
//     await api.get("/vendors").then(response => {
//       dispatch({ type: "VENDOR_AKTIF_GET_ALL_DATA", data: response.data })
//     })
//   }
// }

// export const getDataVendorInReview = params => {
//   return async dispatch => {
//     let startItem
//     let limitItem

//     if (Object.entries(params).length !== 0) {
//       /*
//       dilanjut setelah CRUD
//       let kategori = params.kategori === undefined ? false : Object.keys(params.kategori).length !== 0 ? params.kategori : false;
//       let provinsi = params.provinsi === undefined ? false : Object.keys(params.provinsi).length !== 0 ? params.provinsi : false;
//       let kota = params.kota === undefined ? false : Object.keys(params.kota).length !== 0 ? params.kota : false;
//       */

//       startItem = (params.page - 1) * params.perPage
//       limitItem = params.perPage

//       params = {
//         _start : startItem,
//         _limit: limitItem,
//       }

//     } else {
//       params = {
//         _start : 0,
//         _limit: 4
//       }
//     }

//     await api.get("/vendors-inreview").then(response => {
//       dispatch({
//         type: "VENDOR_IN_REVIEW_GET_DATA",
//         data: response.data,
//         totalPages: response.data.length,
//         params
//       })
//     })
//   }
// }

// export const getInitialDataVendorInReview = () => {
//   return async dispatch => {
//     await api.get("/vendors-inreview").then(response => {
//       dispatch({ type: "VENDOR_IN_REVIEW_GET_ALL_DATA", data: response.data })
//     })
//   }
// }

// export const getDataVendorProblem = params => {
//   return async dispatch => {
//     let startItem
//     let limitItem

//     if (Object.entries(params).length !== 0) {
//       /*
//       dilanjut setelah CRUD
//       let kategori = params.kategori === undefined ? false : Object.keys(params.kategori).length !== 0 ? params.kategori : false;
//       let provinsi = params.provinsi === undefined ? false : Object.keys(params.provinsi).length !== 0 ? params.provinsi : false;
//       let kota = params.kota === undefined ? false : Object.keys(params.kota).length !== 0 ? params.kota : false;
//       */

//       startItem = (params.page - 1) * params.perPage
//       limitItem = params.perPage

//       params = {
//         _start : startItem,
//         _limit: limitItem,
//       }

//     } else {
//       params = {
//         _start : 0,
//         _limit: 4
//       }
//     }

//     await api.get("/vendors-problem").then(response => {
//       dispatch({
//         type: "VENDOR_PROBLEM_GET_DATA",
//         data: response.data,
//         totalPages: response.data.length,
//         params
//       })
//     })
//   }
// }

// export const getInitialDataVendorProblem = () => {
//   return async dispatch => {
//     await api.get("/vendors-problem").then(response => {
//       dispatch({ type: "VENDOR_PROBLEM_GET_ALL_DATA", data: response.data })
//     })
//   }
// }

export const getDataKatalogById = obj => {
  return async dispatch => {
    await api.get(`/catalog/${obj.id}`).then(response => {
      dispatch({ type: "KATALOG_GET_DATA_BY_ID", data: response.data })
    })
  }
}

export const getDataKatalogPemesananById = obj => {
  return async dispatch => {
    await api.get(`/pos/${obj.id}`).then(response => {
      console.log(response, "NAHINI")
      dispatch({ type: "KATALOG_PEMESANAN_GET_DATA_BY_ID", data: response.data })
    })
  }
}

export const getDataKatalogPemesananDiprosesById = obj => {
  return async dispatch => {
    await api.get(`/po-dispatched/${obj.id}`).then(response => {
      console.log(response)
      dispatch({ type: "KATALOG_PEMESANAN_GET_DATA_DIPROSES_BY_ID", data: response.data })
    })
  }
}

export const getDataKatalogPemesananShipping = obj => {
  return async dispatch => {
    console.log(obj, "PEMESANANSHIPPING")
    await api.get(`/po-shipping-items/${obj.id}`).then(response => {
      console.log(response, "PEMESANANSHIPPINGERSSSSS")
      dispatch({ type: "KATALOG_PEMESANAN_GET_DATA_SHIPPING", data: response.data })
    })
  }
}

export const getDataKatalogPemesananDikirim = obj => {
  return async dispatch => {
    await api.get(`/po-send-items?po=${obj.id}&po_shipping_item=${obj.po_shipping_id}`).then(response => {
      console.log(response, "aduh")
      dispatch({ type: "KATALOG_PEMESANAN_GET_DATA_DIKIRIM", data: response.data })
    })
  }
}

export const filterDataApgKatalog = value => {
  return dispatch => dispatch({ type: "FILTER_DATA_APG_KATALOG", value })
}

export const filterDataApgKatalogExpired = value => {
  return dispatch => dispatch({ type: "FILTER_DATA_APG_KATALOG_PO_EXPIRED", value })
}

export const filterDataApgKatalogPemesanan = value => {
  return dispatch => dispatch({ type: "FILTER_DATA_APG_KATALOG_PEMESANAN", value })
}

export const filterDataApgKatalogPemesananStatus = value => {
  return dispatch => dispatch({ type: "FILTER_DATA_APG_KATALOG_PEMESANAN_STATUS", value })
}

// export const updateDataVendorAktif = obj => {
//   return (dispatch, getState) => {
//     api.put("/vendors/" + obj.id, obj)
//       .then(response => {
//         alert("Vendor berhasil diupdate")
//         dispatch({ type: "VENDOR_AKTIF_UPDATE_DATA", obj })
//       })
//   }
// }

// export const vendorTerverifikasi = obj => {
//   return (dispatch, getState) => {
//     api.get("/vendors-confirm/" + obj.id)
//       .then(response => {
//         alert("Status vendor telah diperbarui")
//         dispatch({ type: "VENDOR_TERVERIFIKASI", obj })
//       })
//   }
// }

// export const vendorPersyaratanBelumTerpenuhi = obj => {
//   return (dispatch, getState) => {
//     api.get("/vendors-unqualified/" + obj.id)
//       .then(response => {
//         alert("Status vendor telah diperbarui")
//         dispatch({ type: "VENDOR_PERSYARATAN_BELUM_TERPENUHI", obj })
//       })
//   }
// }

export const getDataApgKatalog = params => {
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
        _limit: 4,
      }
    }

    await api.get("/catalog", { params }).then(response => {
      console.log(response, "CATALOGUE")
      dispatch({
        type: "APG_KATALOG_GET_DATA",
        data: response.data,
        totalPages: response.data.length,
        params
      })
    })
  }
}

export const getDataApgKatalogPOExpired = params => {
  return async dispatch => {
    let startItem
    let limitItem
    let status = "expired"

    if (Object.entries(params).length !== 0) {
      startItem = params._start !== undefined ? params._start : (params.page - 1) * params.perPage
      limitItem = params._limit !== undefined ? params._limit : params.perPage

      params = {
        _start : startItem,
        _limit: limitItem,
        status
      }

    } else {
      params = {
        _start : 0,
        _limit: 4,
        status
      }
    }

    await api.get("/pos", { params }).then(response => {
      console.log(response, "NOT INITIAL")
      dispatch({
        type: "APG_KATALOG_GET_DATA_PO_EXPIRED",
        data: response.data,
        totalPages: response.data.length,
        params
      })
    })
  }
}

export const getInitialDataApgKatalogPOExpired = (params) => {
  let status = "expired"

  params = {
    status
  }
  return async dispatch => {
    await api.get("/pos", { params }).then(response => {
      console.log(response, "INITIAL")
      dispatch({ type: "APG_KATALOG_GET_ALL_DATA_PO_EXPIRED", data: response.data })
    })
  }
}

export const getDataApgKatalogPemesanan = params => {
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
        _limit: 4,
      }
    }

    await api.get("/pos", { params }).then(response => {
      console.log(response)
      dispatch({
        type: "APG_KATALOG_GET_DATA_PEMESANAN",
        data: response.data,
        totalPages: response.data.length,
        params
      })
    })
  }
}

export const getInitialDataApgKatalogPemesanan = () => {
  return async dispatch => {
    await api.get("/pos").then(response => {
      console.log(response.data)
      dispatch({ type: "APG_KATALOG_GET_ALL_DATA_PEMESANAN", data: response.data })
    })
  }
}


// export const getDataVendorKelas = params => {
//   return async dispatch => {
//     let startItem
//     let limitItem

//     if (Object.entries(params).length !== 0) {
//       startItem = params._start !== undefined ? params._start : (params.page - 1) * params.perPage
//       limitItem = params._limit !== undefined ? params._limit : params.perPage

//       params = {
//         _start : startItem,
//         _limit: limitItem,
//       }

//     } else {
//       params = {
//         _start : 0,
//         _limit: 4
//       }
//     }

//     await api.get("/vendor-classes", { params }).then(response => {
//       dispatch({
//         type: "VENDOR_KELAS_GET_DATA",
//         data: response.data,
//         totalPages: response.data.length,
//         params
//       })
//     })
//   }
// }

// export const getInitialDataVendorKelas = () => {
//   return async dispatch => {
//     await api.get("/vendor-classes").then(response => {
//       dispatch({ type: "VENDOR_KELAS_GET_ALL_DATA", data: response.data })
//     })
//   }
// }

// export const deleteDataVendorKelas = obj => {
//   return async dispatch => {
//     await api.delete("/vendor-classes/" + obj.id)
//       .then(response => {
//         alert("Kelas vendor berhasil dihapus")
//         dispatch({ type: "VENDOR_KELAS_DELETE_DATA", obj })
//       })
//   }
// }

// export const updateDataVendorKelas = obj => {
//   return async (dispatch, getState) => {
//     await api.put("/vendor-classes/" + obj.id, obj)
//       .then(response => {
//         alert("Kelas vendor berhasil diupdate")
//         dispatch({ type: "VENDOR_KELAS_UPDATE_DATA", obj })
//       })
//   }
// }

// export const addDataVendorKelas = obj => {
//   return async (dispatch, getState) => {
//     let params = getState().apgVendor.params
//     await api.post("/vendor-classes", obj).then(response => {
//         alert("Kelas vendor berhasil ditambahkan")
//         dispatch({ type: "VENDOR_KELAS_ADD_DATA", obj })
//         dispatch(getDataVendorKelas(params))
//       })
//   }
// }

// export const importDataVendorKelas = file => {
//   return async (dispatch, getState) => {
//     let params = getState().apgVendor.params
//     const formData = new FormData()
//     formData.append('data', JSON.stringify({}))
//     formData.append('files.import', file)
//     await api.post("/vendor-classes-import", formData, { headers: {'content-type': 'multipart/form-data'} }).then(response => {
//         alert("Kelas vendor berhasil diimpor")
//         dispatch({ type: "VENDOR_KELAS_IMPORT_DATA", obj: response.data })
//         dispatch(getDataVendorKelas(params))
//       })
//   }
// }

// export const getDataVendorSbu = params => {
//   return async dispatch => {
//     let startItem
//     let limitItem

//     if (Object.entries(params).length !== 0) {
//       startItem = params._start !== undefined ? params._start : (params.page - 1) * params.perPage
//       limitItem = params._limit !== undefined ? params._limit : params.perPage

//       params = {
//         _start : startItem,
//         _limit: limitItem,
//       }

//     } else {
//       params = {
//         _start : 0,
//         _limit: 4
//       }
//     }

//     await api.get("/sbus", { params }).then(response => {
//       dispatch({
//         type: "VENDOR_SBU_GET_DATA",
//         data: response.data,
//         totalPages: response.data.length,
//         params
//       })
//     })
//   }
// }

// export const getInitialDataVendorSbu = () => {
//   return async dispatch => {
//     await api.get("/sbus").then(response => {
//       dispatch({ type: "VENDOR_SBU_GET_ALL_DATA", data: response.data })
//     })
//   }
// }

// export const deleteDataVendorSbu = obj => {
//   return async dispatch => {
//     await api.delete("/sbus/" + obj.id)
//       .then(response => {
//         alert("Sbu vendor berhasil dihapus")
//         dispatch({ type: "VENDOR_SBU_DELETE_DATA", obj })
//       })
//   }
// }

// export const updateDataVendorSbu = obj => {
//   return async (dispatch, getState) => {
//     await api.put("/sbus/" + obj.id, obj)
//       .then(response => {
//         alert("Sbu vendor berhasil diupdate")
//         dispatch({ type: "VENDOR_SBU_UPDATE_DATA", obj })
//       })
//   }
// }

export const updateDataPesanan = (id, obj)=> {
  return (dispatch, getState) => {
    console.log(obj, "UWOOOOOOOOOOOOOOO")
    api.put("/po-dispatch-receive/" + id, obj)
      .then(response => {
        alert("Berhasil update data")
        window.location.replace("/apg/katalog-pemesanan")
        dispatch({ type: "UPDATE_DATA", obj })
      })
      .catch(response => {
        console.log(response.response)
      })
  }
}

export const updateDataLocalPesanan = obj => {
  return async dispatch => {
    console.log(obj, "OBECLLECLELCLEE")
      dispatch({ type: "KATALOG_PEMESANAN_GET_UPDATE", data: obj })
    }
}

export const apgKatalogKirimPesanan = (obj) => {
  let status = "Konfirmasi"

  obj = {
    ...obj,
    status
  }
  return async dispatch => {
    await api.put("/pos/" + obj.id, obj).then(response => {
      // console.log(response, "AWKOAKWOAKWOKWAOK")
        dispatch({ type: "KATALOG_PEMESANAN_KIRIM_PESANAN", obj })
      })
  }
}

export const apgKatalogPesananSelesai = (obj) => {
  let status = "Selesai"

  obj = {
    ...obj,
    status
  }
  return async dispatch => {
    await api.put("/pos/" + obj.id, obj).then(response => {
      // console.log(response, "AWKOAKWOAKWOKWAOK")
        dispatch({ type: "KATALOG_PEMESANAN_SELESAI", obj })
      })
  }
}

export const apgKatalogUploadPdf = (obj, data) => {
  console.log(obj, data)
  return async dispatch => {
    await api.put("/pos/" + obj.id, data).then(response => {
        dispatch({ type: "KATALOG_PEMESANAN_UPLOAD_PDF", obj })
      })
  }
}

// export const importDataVendorSbu = file => {
//   return async (dispatch, getState) => {
//     let params = getState().apgVendor.params
//     const formData = new FormData()
//     formData.append('data', JSON.stringify({}))
//     formData.append('files.import', file)
//     await api.post("/sbus-import", formData, { headers: {'content-type': 'multipart/form-data'} }).then(response => {
//         alert("Sbu vendor berhasil diimpor")
//         dispatch({ type: "VENDOR_SBU_IMPORT_DATA", obj: response.data })
//         dispatch(getDataVendorSbu(params))
//       })
//   }
// }

// export const getInitialDataProvinsi = () => {
//   return async dispatch => {
//     await api.get("/reg-provinces").then(response => {
//       dispatch({ type: "PROVINSI_GET_ALL_DATA", data: response.data })
//     })
//   }
// }

// export const getInitialDataKota = () => {
//   return async dispatch => {
//     await api.get("/reg-regencies").then(response => {
//       dispatch({ type: "KOTA_GET_ALL_DATA", data: response.data })
//     })
//   }
// }
